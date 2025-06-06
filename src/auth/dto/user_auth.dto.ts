import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserAuthDTO {

  @IsEmail()
  @IsNotEmpty()
  readonly email: string

  @IsNotEmpty()
  readonly password:  string


}