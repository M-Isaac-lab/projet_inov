import { IsEmail, IsNotEmpty } from 'class-validator';

export class Update_accountDto {

  @IsEmail()
  @IsNotEmpty()
  readonly email : string

  @IsNotEmpty()
  readonly password : string

}