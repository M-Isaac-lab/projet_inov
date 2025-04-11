import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AddType_vollaileDto } from './dto/AddType_vollaile.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TypeVollaileService {

  constructor(
    private readonly prismaService : PrismaService
  ) {
  }
  async AddType_vollaile(Fermier_id: number, addType_vollaile: AddType_vollaileDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.type_vollaile.create({data : {...addType_vollaile}})
  }

  async readType_vollaile(Fermier_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.type_vollaile.findMany()
  }

  async ReadTypevollaile_unique(Fermier_id: number, Type_vollaile_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Typevollaile = await this.prismaService.type_vollaile.findUnique({where : {Type_vollaile_id}})
    if(!Typevollaile) throw new NotFoundException("Typevollaile not found")
    return Typevollaile
  }

  async Update_Type_vollaile(Fermier_id: number, Type_vollaile_id: number, update_Type_vollaile: AddType_vollaileDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Typevollaile = await this.prismaService.type_vollaile.findUnique({where : {Type_vollaile_id}})
    if(!Typevollaile) throw new NotFoundException("Type vollaile not found")
    const Typevollaile_info = await this.prismaService.type_vollaile.update({where : {Type_vollaile_id}, data : {...update_Type_vollaile}})
    return Typevollaile_info
  }

  async Delete_Type_vollaile(Fermier_id: number, Type_vollaile_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Type_vollaile = await this.prismaService.type_vollaile.findUnique({where : {Type_vollaile_id}})
    if(!Type_vollaile) throw new NotFoundException("Type_vollaile not found")
    await this.prismaService.type_vollaile.delete({where : {Type_vollaile_id}})
    return {
      data : "Success Suppression of Type_vollaile"
    }
  }
}
