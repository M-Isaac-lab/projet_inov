import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AddDecesDto } from './dto/addDeces.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DecesService {
  constructor(
    private readonly prismaService : PrismaService
  ) {
  }

  async AddDeces(Fermier_id: number, addDecs: AddDecesDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.deces.create({data : {...addDecs}})
  }

  async readDeces(Fermier_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.deces.findMany()

  }

  async ReadDeces_unique(Fermier_id: number, Deces_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Deces = await this.prismaService.deces.findUnique({where : {Deces_id}})
    if(!Deces) throw new NotFoundException("Deces not found")
    return Deces

  }

  async Update_Deces(Fermier_id: number, Deces_id: number, update_deces: AddDecesDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Deces = await this.prismaService.deces.findUnique({where : {Deces_id}})
    if(!Deces) throw new NotFoundException("Deces not found")
    const Deces_info = await this.prismaService.deces.update({where : {Deces_id}, data : {...update_deces}})
    return Deces_info
  }

  async Delete_Deces(Fermier_id: number, Deces_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Deces = await this.prismaService.deces.findUnique({where : {Deces_id}})
    if(!Deces) throw new NotFoundException("Deces not found")
    await this.prismaService.deces.delete({where : {Deces_id}})
    return {
      data : "Success Suppression of Deces"
    }
  }
}
