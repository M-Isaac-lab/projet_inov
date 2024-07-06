import { IsNotEmpty } from 'class-validator';

export class AddEnvironnementDto{

  @IsNotEmpty()
  readonly temperature_max_seuil : number

  @IsNotEmpty()
  readonly temperature_min_seuil : number

  @IsNotEmpty()
  readonly humidite_max_seuil : number

  @IsNotEmpty()
  readonly humidite_min_seuil : number

  @IsNotEmpty()
  readonly type_vollaile_id : number

  @IsNotEmpty()
  readonly entreprise_id : number
}