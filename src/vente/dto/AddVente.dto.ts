import { IsNotEmpty } from 'class-validator';

export class AddVenteDto{
  @IsNotEmpty()
  readonly vague_id : number

  @IsNotEmpty()
  readonly Nmbre_vente : number

  @IsNotEmpty()
  readonly date_vente : string
}