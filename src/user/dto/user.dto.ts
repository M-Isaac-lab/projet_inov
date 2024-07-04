import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UserDto {


  @IsEmail()
  @IsNotEmpty()
  readonly email :  string

  @IsNotEmpty()
  readonly name :  string

  @IsNotEmpty()
  @IsOptional()
  readonly phone_number : number

  @IsNotEmpty()
  readonly password:  string

}