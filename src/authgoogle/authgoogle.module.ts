import { Global, Module } from '@nestjs/common';
import { AuthgoogleController } from './authgoogle.controller';
import { AuthgoogleService } from './authgoogle.service';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';
import { GoogleStrategy } from './google.strategy';
import { ConfigService } from '@nestjs/config';


@Global()
@Module({
  imports : [PassportModule.register({ defaultStrategy: 'google' })],
  controllers: [AuthgoogleController],
  providers: [AuthgoogleService,  GoogleStrategy, PrismaService, ConfigService],
  exports: [AuthgoogleService]
})
export class AuthgoogleModule {}
