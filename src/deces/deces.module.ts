import { Module } from '@nestjs/common';
import { DecesController } from './deces.controller';
import { DecesService } from './deces.service';

@Module({
  controllers: [DecesController],
  providers: [DecesService]
})
export class DecesModule {}
