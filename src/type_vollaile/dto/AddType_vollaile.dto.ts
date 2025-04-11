import { IsNotEmpty } from 'class-validator';

export class AddType_vollaileDto {

  @IsNotEmpty()
  readonly nom : string

  @IsNotEmpty()
  readonly vague_id : number
}