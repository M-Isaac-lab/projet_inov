import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AddEntrepriseDto } from './dto/AddEntreprise.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EntrepriseService {
  constructor(
    private readonly prismaService : PrismaService
  ) {
  }


  async AddEntreprise(Fermier_id: number, addEntreprise: AddEntrepriseDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.entreprise.create({data : {...addEntreprise}})
  }

  async readEntreprise(Fermier_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.entreprise.findMany()

  }

  async ReadEntreprise_unique(Fermier_id: number, Entreprise_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Entreprise = await this.prismaService.entreprise.findUnique({where : {Entreprise_id}})
    if(!Entreprise) throw new NotFoundException("Deces not found")
    return Entreprise
  }

  async Update_Entreprise(Fermier_id: number, Entreprise_id: number, update_Entreprise: AddEntrepriseDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Entreprise = await this.prismaService.entreprise.findUnique({where : {Entreprise_id}})
    if(!Entreprise) throw new NotFoundException("Deces not found")
    const Entreprise_info = await this.prismaService.entreprise.update({where : {Entreprise_id}, data : {...update_Entreprise}})
    return Entreprise_info
  }

  async Delete_Entreprise(Fermier_id: number, Entreprise_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Entreprise = await this.prismaService.entreprise.findUnique({where : {Entreprise_id}})
    if(!Entreprise) throw new NotFoundException("Deces not found")
    await this.prismaService.entreprise.delete({where : {Entreprise_id}})
    return {
      data : "Success Suppression of Entreprise"
    }
  }
}
