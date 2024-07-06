import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class Update_account_infoDto {

  @IsNotEmpty()
  @IsOptional()
  readonly nom :  string

  @IsNotEmpty()
  @IsOptional()
  readonly phone_number : number

  @IsNotEmpty()
  @IsOptional()
  readonly prenom : string

  @IsNotEmpty()
  @IsOptional()
  readonly adresse : string

  @IsNotEmpty()
  @IsOptional()
  readonly role : string

  @IsNotEmpty()
  @IsOptional()
  readonly entreprise_id : number

  @IsNotEmpty()
  readonly code_otp : string

}