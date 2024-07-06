import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import { Jwtstrategy } from '../jwtstrategy/jwtStrategy';
import { NodemailerService } from '../nodemailer/nodemailer.service';

@Module(
  {

  imports: [
    UserModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('secret_jwt'),
        signOptions: { expiresIn: '60s' },
      }),
    }),],

  controllers: [AuthController],
  providers: [AuthService, Jwtstrategy, NodemailerService],
    exports: [AuthService],
})
export class AuthModule {}
