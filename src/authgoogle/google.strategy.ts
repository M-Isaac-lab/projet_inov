import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
//import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { AuthgoogleService } from './authgoogle.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy (Strategy, 'google') {
  constructor(
    private readonly authgoogleService : AuthgoogleService,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: 'http://localhost:3000/authgoogle/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const user = await this.authgoogleService.validateUser(profile);

    done(null, user);
  }
}
