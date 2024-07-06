import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthgoogleService {
  constructor(private readonly prismaService: PrismaService) {}

  async validateUser(profile: any): Promise<any> {
    const { id, emails, displayName } = profile;
    const email = emails[0].value;

    // Recherchez l'utilisateur dans votre base de données
    let user = await this.prismaService.fermier.findUnique({ where: { email } });
    console.log("user service",user)

    // Si l'utilisateur n'existe pas, créez-le
    /*
    if (!user) {
      user = await this.prismaService.fermier.create({
        data: {
          email,
          nom: displayName,
        },
      });
    }
    */


    return user;
  }

  async save_user(user: any) {
    console.log(user)
    return await user
  }
}
