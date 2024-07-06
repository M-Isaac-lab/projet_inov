import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TypeMedicamentService } from './type_medicament.service';
import { ApiBasicAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { AddDecesDto } from '../deces/dto/addDeces.dto';
import { Request } from 'express';
import { AddTypeMedicamentDto } from './dto/AddTypeMedicament.dto';

@Controller('type-medicament')
export class TypeMedicamentController {
  constructor(
    private readonly typemedicamentService : TypeMedicamentService
  ) {
  }

  @Post("addTypeMedicament")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  addType_medicament(@Body() addType_medicament : AddTypeMedicamentDto, @Req() req : Request){
    const user_id = req.user["Fermier_id"]
    return this.typemedicamentService.AddType_medicament(user_id,addType_medicament)
  }


  @Get("readTypeMedicament")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readType_medicament(@Req() req : Request){
    const Fermier_id = req.user["Fermier_id"]
    return this.typemedicamentService.readType_medicament(Fermier_id)
  }

  @Get("readTypeMedicament/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readType_medicament_unique(@Req() req : Request, @Param("id", ParseIntPipe) Type_medicament_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.typemedicamentService.ReadType_medicament_unique(Fermier_id, Type_medicament_id)
  }

  @Put("updateTypeMedicament/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  update_Type_medicament(@Req() req : Request, @Param("id", ParseIntPipe) Type_medicament_id : number, @Body() update_Type_medicament : AddTypeMedicamentDto) {
    const Fermier_id = req.user["Fermier_id"]
    return this.typemedicamentService.Update_Type_medicament(Fermier_id, Type_medicament_id, update_Type_medicament)
  }

  @Put("DeleteTypeMedicament/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  delete_Type_medicament(@Req() req : Request, @Param("id", ParseIntPipe) Type_medicament_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.typemedicamentService.Delete_Type_medicament(Fermier_id, Type_medicament_id)
  }
}
