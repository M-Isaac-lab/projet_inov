import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AddEnvironnementDto } from './dto/AddEnvironnement.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EnvironnementService {
  constructor(
    private readonly prismaService : PrismaService
  ) {
  }

  async AddEnvironnement(Fermier_id: number, addEnvironnement: AddEnvironnementDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.environnement.create({data : {...addEnvironnement}})
  }

  async readEnvironnement(Fermier_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.environnement.findMany()
  }

  async ReadEnvironnement_unique(Fermier_id: number, Environnement_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Environnement = await this.prismaService.environnement.findUnique({where : {Environnement_id}})
    if(!Environnement) throw new NotFoundException("Deces not found")
    return Environnement
  }

  async Update_Environnement(Fermier_id: number, Environnement_id: number, update_environnement: AddEnvironnementDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Environnement = await this.prismaService.environnement.findUnique({where : {Environnement_id}})
    if(!Environnement) throw new NotFoundException("Deces not found")
    const Environnement_info = await this.prismaService.environnement.update({where : {Environnement_id}, data : {...update_environnement}})
    return Environnement_info
  }

  async Delete_Environnement(Fermier_id: number, Environnement_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Environnement = await this.prismaService.environnement.findUnique({where : {Environnement_id}})
    if(!Environnement) throw new NotFoundException("Deces not found")
    await this.prismaService.environnement.delete({where : {Environnement_id}})
    return {
      data : "Success Suppression of Deces"
    }
  }
}
