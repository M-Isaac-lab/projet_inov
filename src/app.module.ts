import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { AuthgoogleModule } from './authgoogle/authgoogle.module';



@Module({

  imports: [PrismaModule, UserModule, ConfigModule.forRoot(), AuthModule, NodemailerModule, AuthgoogleModule],
})
export class AppModule {}
