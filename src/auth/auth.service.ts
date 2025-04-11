import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserAuthDTO } from './dto/user_auth.dto';
import { SignupDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { Reset_passwordDto } from './dto/reset_password.dto';
import * as speakeasy from "speakeasy"
import { NodemailerService } from '../nodemailer/nodemailer.service';
import { Reset_password_confirmationDto } from './dto/reset_password_confirmation.dto';
import { Delete_accountDto } from './dto/delete_account.dto';
import { Delete_account_confirmationDto } from './dto/Delete_account_confirmation.dto';
import { Update_accountDto } from './dto/update_account.dto';
import { Update_account_infoDto } from './dto/update_account_info.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly nodemailerService : NodemailerService,
  ) {
  }

  async SignIn(User : UserAuthDTO): Promise<{
    access_token: string;
    user: any
  }> {
    const {email, password} = User;
    const user = await this.prismaService.fermier.findUnique({where : {email}});
    if(!user) throw new NotFoundException("User not Found")
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new UnauthorizedException("password is false");
    const payload = { sub: user.Fermier_id, username: user.nom };
    const access_token = await this.jwtService.signAsync(payload)
    return {
      access_token,
      user: {
        name: user.nom,
        email: user.email,          // Correction here
        phone_number: user.phone_number,
      },
    };
  }

  async SignUp(UserSignUp: SignupDto) {
    const {email, password, nom, phone_number} = UserSignUp
    const secret_code_hash = parseInt(this.configService.get("hash_code"))
    const hash = await bcrypt.hash(password,secret_code_hash);
    try{
      const user = await this.prismaService.fermier.create({data : {...UserSignUp, password : hash}})
      await this.nodemailerService.sendSignupConfirmation(email)
      return {data : "success !"}
    }catch (e) {
      throw new UnauthorizedException(e);
      //console.log(e)
      return {data : "Error in the transaction",e}
    }


  }

  async reset_password(reset_password : Reset_passwordDto){
    const {email, password} = reset_password
    const user = await this.prismaService.fermier.findUnique({where : {email}})
    if(!user) throw new NotFoundException("User not Found")
    const code_otp = speakeasy.totp({
      secret: this.configService.get("OTP_CODE"),
      digits : 5,
      step : 60 * 15,
      encoding : "base32"
    })

    try {
      this.nodemailerService.reset_password(email,code_otp)
      return {data : "verify your adresse email"}
    }catch (e){
      console.log("erreur lors de l'envoie", e)
    }

  }

  async reset_password_confirmation(reset_password_confirmation : Reset_password_confirmationDto){
    const {email, new_password, otp_code} = reset_password_confirmation
    const user = await this.prismaService.fermier.findUnique({where : {email}})
    if(!user) throw new NotFoundException("User not Found")
    const code_otp = speakeasy.totp.verify({
      secret : this.configService.get("OTP_CODE"),
      token : otp_code,
      digits : 5,
      step : 60 * 15,
      encoding : "base32"
    })

    if(!code_otp) throw new UnauthorizedException("OTP not correspond");
    const password = await bcrypt.hash(new_password, this.configService.get("hash_code"))
    await this.prismaService.fermier.update({where : {email}, data:{password}})
    await this.nodemailerService.reset_password_confirmation(email)
    return {data : "Successful reset Password !"}
  }


  async delete_account(Fermier_id: number, delete_Account: Delete_accountDto) {
    const {password, email} = delete_Account
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new NotFoundException("User not Found")
    if(user.email != email) throw new UnauthorizedException("User doesn't match")
    const match = await bcrypt.compare(password, user.password)
    if(!match) throw new UnauthorizedException("Password don't match")
    const code_otp = speakeasy.totp({
      secret: this.configService.get("OTP_CODE_F"),
      digits : 5,
      step : 60 * 15,
      encoding : "base64"
    })
    await this.nodemailerService.delete_account(email,code_otp)

    return {data : "Verify your adresse mail"}
  }

  async delete_account_confirmation(Fermier_id: number, delete_Account: Delete_account_confirmationDto) {
    const {email,password,code_otp} = delete_Account
    const user = await this.prismaService.fermier.findUnique({where : {email}})
    if(!user) throw new NotFoundException("User not Found")
    if(user.email != email) throw new UnauthorizedException("User doesn't match")
    const match = await bcrypt.compare(password, user.password)
    if(!match) throw new UnauthorizedException("Password don't match")
    const code_otp_ver = speakeasy.totp.verify({
      secret: this.configService.get("OTP_CODE_F"),
      digits : 5,
      token : code_otp,
      step : 60 * 15,
      encoding : "base64"
    })

    if(!code_otp_ver) throw new UnauthorizedException("")
    await this.prismaService.fermier.delete({where : {Fermier_id}})
    await this.nodemailerService.reset_password_confirmation(email)
    return {data : "Delete Account Successful"}
  }


  async updateaccount(Fermier_id: number, update_account: Update_accountDto) {
    const {email, password} = update_account
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    //
    const code_otp = speakeasy.totp({
      secret : this.configService.get("CODE_OTP_F"),
      digits : 5,
      step : 60 * 15,
      encoding : "base32"
    })
    await this.nodemailerService.update_account(email, code_otp)
    return {data : "verify your adresse email"}

  }

  async updateaccountconfirmation (Fermier_id: number, update_account: Update_account_infoDto) {
    const {code_otp} = update_account
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new NotFoundException("User doesn't found")
    if(user.Fermier_id != Fermier_id) throw new UnauthorizedException("Error User doesn't match")
    const code_otp_conf = speakeasy.totp.verify({
      secret : this.configService.get("CODE_OTP_F"),
      digits : 5,
      token: code_otp,
      step : 60 * 15,
      encoding : "base32"
    })
    await this.prismaService.fermier.update({where : {Fermier_id} , data : {...update_account}})
    await this.nodemailerService.update_account_confirmation(user.email)
    return {data : "Information of Account was updated"}
  }
}
