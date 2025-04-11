import { Body, Controller, Delete, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthDTO } from './dto/user_auth.dto';
import { SignupDto } from './dto/signup.dto';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { Reset_passwordDto } from './dto/reset_password.dto';
import { Reset_password_confirmationDto } from './dto/reset_password_confirmation.dto';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { Request } from 'express';
import { Delete_accountDto } from './dto/delete_account.dto';
import { Delete_account_confirmationDto } from './dto/Delete_account_confirmation.dto';
import { Update_accountDto } from './dto/update_account.dto';
import { Update_account_infoDto } from './dto/update_account_info.dto';


@ApiTags("Authentification")
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }

  @ApiBasicAuth()
  @Post("/SignIn")
  SignIn(@Body() User : UserAuthDTO){
    return this.authService.SignIn(User)
  }

  @ApiBasicAuth()
  @Post('/SignUp')
  SignUp(@Body() UserSignUp : SignupDto){
    return this.authService.SignUp(UserSignUp)
  }

  @ApiBasicAuth()
  @Post("/ResetPassword")
  ResetPassword(@Body() reset_password : Reset_passwordDto){
    return this.authService.reset_password(reset_password)
  }

  @ApiBasicAuth()
  @Put("/ResetPassword_confirmation")
    ResetPasswordConfirmation(@Body() reset_password_confirmation : Reset_password_confirmationDto){
      return this.authService.reset_password_confirmation(reset_password_confirmation)

}

  @Post("DeleteAccount")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  DeleteAccount(@Req() request : Request, @Body() delete_Account : Delete_accountDto){
    const Fermier_id = request.user["Fermier_id"]
    return this.authService.delete_account(Fermier_id,delete_Account)

  }

  @Delete("DeleteAccount")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  DeleteAccountConfirmation(@Req() request : Request, @Body() delete_Account : Delete_account_confirmationDto){
    const Fermier_id = request.user["Fermier_id"]
    return this.authService.delete_account_confirmation(Fermier_id,delete_Account)

  }

  @Post("UpdateAccount")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  UpdateAccount(@Req() request : Request, @Body() update_account : Update_accountDto ){
    const Fermier_id = request.user["Fermier_id"]
    return this.authService.updateaccount(Fermier_id, update_account)
  }

  @Put("UpdateAccountConfirmation")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  UpdateAccountConfirmation(@Req() request : Request, @Body() update_account_info : Update_account_infoDto){
    const Fermier_id = request.user["Fermier_id"]
    return this.authService.updateaccountconfirmation(Fermier_id, update_account_info)
  }


}
