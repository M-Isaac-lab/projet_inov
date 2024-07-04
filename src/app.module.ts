import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';



@Module({

  imports: [PrismaModule, UserModule, ConfigModule.forRoot(), AuthModule],
})
export class AppModule {}
