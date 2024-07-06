import { Module } from '@nestjs/common';
import { TypeMedicamentController } from './type_medicament.controller';
import { TypeMedicamentService } from './type_medicament.service';

@Module({
  controllers: [TypeMedicamentController],
  providers: [TypeMedicamentService]
})
export class TypeMedicamentModule {}
