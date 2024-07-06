import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthgoogleService } from './authgoogle.service';

@Controller('authgoogle')
export class AuthgoogleController {
  constructor(
    private readonly authgoogleService : AuthgoogleService
  ) {
  }
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {

    // This will trigger the Google OAuth flow
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const user = req.user;
    console.log("google/redirect controler",user)
    res.redirect(`http://localhost:3000/success?user=${JSON.stringify(user)}`);
  }
}
