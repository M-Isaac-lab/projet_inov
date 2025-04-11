import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddTypeAlimentDto } from './dto/AddTypeAliment.dto';

@Injectable()
export class TypeAlimentService {
  constructor(
    private readonly prismaService : PrismaService
  ) {
  }


  async AddTypeAliment(Fermier_id: number, addTypeAliment: AddTypeAlimentDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.type_aliment.create({data : {...addTypeAliment}})
  }

  async readTypeAliment(Fermier_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.type_aliment.findMany()
  }

  async ReadTypeAliment_unique(Fermier_id: number, Type_aliment_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Type_aliment = await this.prismaService.type_aliment.findUnique({where : {Type_aliment_id}})
    if(!Type_aliment) throw new NotFoundException("Deces not found")
    return Type_aliment
  }

  async Update_TypeAliment(Fermier_id: number, Type_aliment_id: number, update_typeAliment: AddTypeAlimentDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Type_aliment = await this.prismaService.type_aliment.findUnique({where : {Type_aliment_id}})
    if(!Type_aliment) throw new NotFoundException("Deces not found")
    const Type_aliment_info = await this.prismaService.type_aliment.update({where : {Type_aliment_id}, data : {...update_typeAliment}})
    return Type_aliment_info
  }

  async Delete_TypeAliment(Fermier_id: number, Type_aliment_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Type_aliment = await this.prismaService.type_aliment.findUnique({where : {Type_aliment_id}})
    if(!Type_aliment) throw new NotFoundException("Type aliment not found")
    await this.prismaService.type_aliment.delete({where : {Type_aliment_id}})
    return {
      data : "Success Suppression of Type aliment"
    }
  }
}
