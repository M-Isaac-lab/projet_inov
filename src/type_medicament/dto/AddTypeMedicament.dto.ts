import { IsNotEmpty } from 'class-validator';

export class AddTypeMedicamentDto {
  @IsNotEmpty()
  readonly nom : string

  @IsNotEmpty()
  readonly quantite : number

  @IsNotEmpty()
  readonly type_vollaile_id : number

  @IsNotEmpty()
  readonly entreprise_id : number

}