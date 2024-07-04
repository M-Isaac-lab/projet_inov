import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthDTO } from './dto/user_auth.dto';
import { SignupDto } from './dto/signup.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Authentification")
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }


  @Post("/SignIn")
  SignIn(@Body() User : UserAuthDTO){
    return this.authService.SignIn(User)
  }

  @Post('/SignUp')
  SignUp(@Body() UserSignUp : SignupDto){
    return this.authService.SignUp(UserSignUp)
  }


}
