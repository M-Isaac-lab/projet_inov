import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { EnvironnementService } from './environnement.service';
import { ApiBasicAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { AddDecesDto } from '../deces/dto/addDeces.dto';
import { Request } from 'express';
import { AddEnvironnementDto } from './dto/AddEnvironnement.dto';

@Controller('environnement')
export class EnvironnementController {
  constructor(
    private readonly environnementService : EnvironnementService
  ) {
  }

  @Post("addEnvironnement")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  addDeces(@Body() addEnvironnement : AddEnvironnementDto, @Req() req : Request){
    const user_id = req.user["Fermier_id"]
    return this.environnementService.AddEnvironnement(user_id,addEnvironnement)
  }


  @Get("readEnvironnement")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readDeces(@Req() req : Request){
    const Fermier_id = req.user["Fermier_id"]
    return this.environnementService.readEnvironnement(Fermier_id)
  }

  @Get("readEnvironnement/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readDeces_unique(@Req() req : Request, @Param("id", ParseIntPipe) Environnement_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.environnementService.ReadEnvironnement_unique(Fermier_id, Environnement_id)
  }

  @Put("updateEnvironnement/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  update_Deces(@Req() req : Request, @Param("id", ParseIntPipe) Environnement_id : number, @Body() update_environnement : AddEnvironnementDto) {
    const Fermier_id = req.user["Fermier_id"]
    return this.environnementService.Update_Environnement(Fermier_id, Environnement_id, update_environnement)
  }

  @Put("DeleteEnvironnement/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  delete_Deces(@Req() req : Request, @Param("id", ParseIntPipe) Environnement_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.environnementService.Delete_Environnement(Fermier_id, Environnement_id)
  }
}
