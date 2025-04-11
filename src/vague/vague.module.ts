import { Module } from '@nestjs/common';
import { VagueController } from './vague.controller';
import { VagueService } from './vague.service';

@Module({
  controllers: [VagueController],
  providers: [VagueService]
})
export class VagueModule {}
