import { IsNotEmpty } from 'class-validator';


export class AddVagueDto {

  @IsNotEmpty()
  readonly Date_debut : string

  @IsNotEmpty()
  readonly Quantite_entree : number

  @IsNotEmpty()
  readonly Quantite_presente : number

  @IsNotEmpty()
  readonly N_jour : number
}