import { Module } from '@nestjs/common';
import { EnvironnementController } from './environnement.controller';
import { EnvironnementService } from './environnement.service';

@Module({
  controllers: [EnvironnementController],
  providers: [EnvironnementService]
})
export class EnvironnementModule {}
