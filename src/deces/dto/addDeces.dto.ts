import { IsNotEmpty } from 'class-validator';

export class AddDecesDto {

  @IsNotEmpty()
  readonly vague_id : number

  @IsNotEmpty()
  readonly Nmbre_deces : number

  @IsNotEmpty()
  readonly date_deces : string
}