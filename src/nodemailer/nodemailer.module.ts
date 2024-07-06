import { Global, Module } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { ConfigService } from '@nestjs/config';


@Global()
@Module({
  providers: [NodemailerService, ConfigService],
  exports : [NodemailerService]
})
export class NodemailerModule {}
