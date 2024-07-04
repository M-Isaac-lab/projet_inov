import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserAuthDTO } from './dto/user_auth.dto';
import { SignupDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
  }

  async SignIn(User : UserAuthDTO): Promise<{
    access_token: string;
    user: { name: any; phone_number: any; email: any }
  }> {
    const {email, password} = User
    const user = await this.prismaService.user.findUnique({where : {email}})
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new UnauthorizedException();
    const payload = { sub: user.id, username: user.name };
    const access_token = await this.jwtService.signAsync(payload)
    return {
      access_token,
      user: {
        name: user.name,
        email: user.email,          // Correction here
        phone_number: user.phone_number,
      },
    };
  }

  async SignUp(UserSignUp: SignupDto) {
    const {email, password, name, phone_number} = UserSignUp
    const secret_code_hash = parseInt(this.configService.get("hash_code"))
    const hash = await bcrypt.hash(password,secret_code_hash);
    try{
      const user = await this.prismaService.user.create({data : {name, email, phone_number, password : hash}})
      return {data : "success"}
    }catch (e) {
      throw new UnauthorizedException(e);
      console.log(e)
    }


  }
}
