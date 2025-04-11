import { Module } from '@nestjs/common';
import { TypeAlimentController } from './type_aliment.controller';
import { TypeAlimentService } from './type_aliment.service';

@Module({
  controllers: [TypeAlimentController],
  providers: [TypeAlimentService]
})
export class TypeAlimentModule {}
