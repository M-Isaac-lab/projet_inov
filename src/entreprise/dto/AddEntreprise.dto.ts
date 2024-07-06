import { IsNotEmpty } from 'class-validator';

export class AddEntrepriseDto {

  @IsNotEmpty()
  readonly nom : string

  @IsNotEmpty()
  readonly vague_id : number
}