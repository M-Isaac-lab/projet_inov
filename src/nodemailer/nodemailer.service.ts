import { Injectable } from '@nestjs/common';
import * as nodemailer from "nodemailer"
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NodemailerService {
  constructor(
    private readonly configService : ConfigService
  ) {
  }

  private async transporteur () {
    const testAccount = await nodemailer.createTestAccount()
    const transport = nodemailer.createTransport({
      host : "smtp.gmail.com",
      port : 587,
      secure : false,
      auth : {
        user : this.configService.get("GMAIL_USER"),
        pass : this.configService.get("GMAIL_PASS")
      }
    });

    return transport

  }


  async sendSignupConfirmation (userEmail : string) {
    try{
      (await this.transporteur()).sendMail({
        from : "app@localhost.com",
        to : userEmail,
        subject : "Inscription",
        html : "<h1>Confirmation d'inscription</h1>"
      })
    }catch (e) {
      console.log("Erreur survenu lors de l'envoie des mails" , e)
      return {data : "Erreur survenu lors de l'envoie des mails" , e};
    }

  }

  async reset_password (userEmail : string, OTP_CODE :  any) {
    (await this.transporteur()).sendMail({
      from : "app@localhost.com",
      to : userEmail,
      subject : "Inscription",
      html : `<h1>Confirmation d'inscription</h1>
<b>Voici votre code OTP : ${OTP_CODE}</b>
<p>Veuillez sous aucun pretexte le partager !</p>`
    })
  }

  async reset_password_confirmation (userEmail) {
    (await this.transporteur()).sendMail({
      from : "app@localhost.com",
      to : userEmail,
      subject : "Inscription",
      html : `<h1>Mot de passe modifier avec success !</h1>`
    })
  }

  async delete_account (userEmail : string, OTP_CODE :  any) {
    (await this.transporteur()).sendMail({
      from : "app@localhost.com",
      to : userEmail,
      subject : "Inscription",
      html : `<h1>Confirmation supression du compte : ${userEmail}</h1>
<b>Voici votre code OTP : ${OTP_CODE}</b>
<p>Veuillez sous aucun pretexte le partager !</p>`
    })
  }

  async update_account (userEmail : string, OTP_CODE :  any) {
    (await this.transporteur()).sendMail({
      from : "app@localhost.com",
      to : userEmail,
      subject : "Inscription",
      html : `<h1>Confirmation mise a jour du compte</h1>
<b>Voici votre code OTP : ${OTP_CODE}</b>
<p>Veuillez sous aucun pretexte le partager !</p>`
    })
  }

  async update_account_confirmation (userEmail : string) {
    (await this.transporteur()).sendMail({
      from : "app@localhost.com",
      to : userEmail,
      subject : "Inscription",
      html : `<h1>Mise a jour des informations effectue !</h1>`
    })
  }
}


