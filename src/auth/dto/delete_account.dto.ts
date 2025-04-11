import { IsNotEmpty } from 'class-validator';

export class Delete_accountDto {


  @IsNotEmpty()
  readonly password: string

  @IsNotEmpty()
  readonly email : string


}