import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AddTypeMedicamentDto } from './dto/AddTypeMedicament.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TypeMedicamentService {

  constructor(
    private readonly prismaService : PrismaService
  ) {
  }

  async AddType_medicament(Fermier_id: any, addType_medicament: AddTypeMedicamentDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.type_medicament.create({data : {...addType_medicament}})
  }

  async readType_medicament(Fermier_id: any) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    return await this.prismaService.type_medicament.findMany()
  }

  async ReadType_medicament_unique(Fermier_id: any, Type_medicament_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Type_medicament = await this.prismaService.type_medicament.findUnique({where : {Type_medicament_id}})
    if(!Type_medicament) throw new NotFoundException("Type medicament not found")
    return Type_medicament
  }

  async Update_Type_medicament(Fermier_id: any, Type_medicament_id: number, update_Type_medicament: AddTypeMedicamentDto) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Type_medicament = await this.prismaService.type_medicament.findUnique({where : {Type_medicament_id}})
    if(!Type_medicament) throw new NotFoundException("Type_medicament not found")
    const Type_medicament_info = await this.prismaService.type_medicament.update({where : {Type_medicament_id}, data : {...update_Type_medicament}})
    return Type_medicament_info
  }

  async Delete_Type_medicament(Fermier_id: any, Type_medicament_id: number) {
    const user = await this.prismaService.fermier.findUnique({where : {Fermier_id}})
    if(!user) throw new UnauthorizedException("Account is invalid")
    const Type_medicament = await this.prismaService.type_medicament.findUnique({where : {Type_medicament_id}})
    if(!Type_medicament) throw new NotFoundException("Type_medicament not found")
    await this.prismaService.type_medicament.delete({where : {Type_medicament_id}})
    return {
      data : "Success Suppression of Type_medicament"
    }
  }
}
