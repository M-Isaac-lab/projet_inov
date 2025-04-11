import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TypeAlimentService } from './type_aliment.service';
import { ApiBasicAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { AddDecesDto } from '../deces/dto/addDeces.dto';
import { Request } from 'express';
import { AddTypeAlimentDto } from './dto/AddTypeAliment.dto';

@Controller('type-aliment')
export class TypeAlimentController {
  constructor(
    private readonly typeAlimentService : TypeAlimentService
  ) {
  }

  @Post("addTypeAliment")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  addTypeAliment(@Body() addTypeAliment : AddTypeAlimentDto, @Req() req : Request){
    const user_id = req.user["Fermier_id"]
    return this.typeAlimentService.AddTypeAliment(user_id,addTypeAliment)
  }


  @Get("readTypeAliment")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readTypeAliment(@Req() req : Request){
    const Fermier_id = req.user["Fermier_id"]
    return this.typeAlimentService.readTypeAliment(Fermier_id)
  }

  @Get("readTypeAliment/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readTypeAliment_unique(@Req() req : Request, @Param("id", ParseIntPipe) TypeAliment_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.typeAlimentService.ReadTypeAliment_unique(Fermier_id, TypeAliment_id)
  }

  @Put("updateTypeAliment/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  update_TypeAliment(@Req() req : Request, @Param("id", ParseIntPipe) TypeAliment_id : number, @Body() update_typeAliment : AddTypeAlimentDto) {
    const Fermier_id = req.user["Fermier_id"]
    return this.typeAlimentService.Update_TypeAliment(Fermier_id, TypeAliment_id, update_typeAliment)
  }

  @Put("DeleteTypeAliment/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  delete_TypeAliment(@Req() req : Request, @Param("id", ParseIntPipe) TypeAliment_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.typeAlimentService.Delete_TypeAliment(Fermier_id, TypeAliment_id)
  }
}
