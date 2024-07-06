import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AddVenteDto } from './dto/AddVente.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VenteService {

  constructor(
    private readonly prismaService : PrismaService
  ) {
  }

  async AddVente(Fermier_id: number, addVente: AddVenteDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.vente.create({data : {...addVente}})
  }

  async readVente(Fermier_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.vente.findMany()
  }

  async ReadVente_unique(Fermier_id: number, Vente_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Vente = await this.prismaService.vente.findUnique({where : {Vente_id}})
    if(!Vente) throw new NotFoundException("Vente not found")
    return Vente
  }

  async Update_Vente(Fermier_id: number, Vente_id: number, update_vente: AddVenteDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Vente = await this.prismaService.vente.findUnique({where : {Vente_id}})
    if(!Vente) throw new NotFoundException("Vente not found")
    const Vente_info = await this.prismaService.vente.update({where : {Vente_id}, data : {...update_vente}})
    return Vente_info
  }

  async Delete_Vente(Fermier_id: number, Vente_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Vente = await this.prismaService.vente.findUnique({where : {Vente_id}})
    if(!Vente) throw new NotFoundException("Vente not found")
    await this.prismaService.vente.delete({where : {Vente_id}})
    return {
      data : "Success Suppression of Vente"
    }
  }
}
