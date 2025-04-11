import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class SignupDto {


  @IsEmail()
  @IsNotEmpty()
  readonly email :  string

  @IsNotEmpty()
  readonly nom :  string

  @IsNotEmpty()
  @IsOptional()
  readonly phone_number : number

  @IsNotEmpty()
  readonly password:  string

  @IsNotEmpty()
  readonly prenom : string

  @IsNotEmpty()
  readonly adresse : string

  @IsNotEmpty()
  readonly role : string

  @IsNotEmpty()
  readonly entreprise_id : number

}