import { IsEmail, IsNotEmpty } from 'class-validator';

export class Delete_account_confirmationDto{
  @IsNotEmpty()
  @IsEmail()
  readonly email: string

  @IsNotEmpty()
  readonly password : string

  @IsNotEmpty()
  readonly code_otp : string
}