import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AddVagueDto } from './dto/AddVague.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VagueService {
  constructor(
    private readonly prismaService : PrismaService
  ) {
  }
  async AddVague(Fermier_id: number, addVague: AddVagueDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.vague.create({data : {...addVague}})
  }

  async readVague(Fermier_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.vague.findMany()
  }

  async ReadVague_unique(Fermier_id: number, Vague_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Vague = await this.prismaService.vague.findUnique({where : {Vague_id}})
    if(!Vague) throw new NotFoundException("Vague not found")
    return Vague
  }

  async Update_Vague(Fermier_id: number, Vague_id: number, update_vague: AddVagueDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Vague = await this.prismaService.vague.findUnique({where : {Vague_id}})
    if(!Vague) throw new NotFoundException("Vague not found")
    const Vague_info = await this.prismaService.vague.update({where : {Vague_id}, data : {...update_vague}})
    return Vague_info
  }

  async Delete_Vague(Fermier_id: number, Vague_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Vague = await this.prismaService.vague.findUnique({where : {Vague_id}})
    if(!Vague) throw new NotFoundException("Vague not found")
    await this.prismaService.vague.delete({where : {Vague_id}})
    return {
      data : "Success Suppression of Vague"
    }
  }
}
