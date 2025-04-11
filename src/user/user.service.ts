import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './dto/user.dto';


@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService,
              ) {
  }

  async Get_All_User() {
    const user = await this.prismaService.fermier.findMany()
    return user
  }

  async Get_One_User(Fermier_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    return user

  }
}
