import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './dto/user.dto';


@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService,
              ) {
  }

  async Add_User(user: UserDto) {

    try{
      const user_rep = await this.prismaService.fermier.create({data : {...user}})
      return user_rep
    } catch (e) {
      return e
    }


  }
}
