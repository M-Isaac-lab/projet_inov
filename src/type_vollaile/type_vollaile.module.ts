import { Module } from '@nestjs/common';
import { TypeVollaileController } from './type_vollaile.controller';
import { TypeVollaileService } from './type_vollaile.service';

@Module({
  controllers: [TypeVollaileController],
  providers: [TypeVollaileService]
})
export class TypeVollaileModule {}
