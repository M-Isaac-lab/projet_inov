import { IsNotEmpty } from 'class-validator';

export class Reset_password_confirmationDto {

  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  new_password: string

  @IsNotEmpty()
  otp_code : string
}