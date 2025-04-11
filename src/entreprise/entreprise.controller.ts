import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBasicAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { AddDecesDto } from '../deces/dto/addDeces.dto';
import { Request } from 'express';
import { EntrepriseService } from './entreprise.service';
import { AddEntrepriseDto } from './dto/AddEntreprise.dto';

@Controller('entreprise')
export class EntrepriseController {
  
  constructor(
    private readonly entrepriseService : EntrepriseService
  ) {
  }

  @Post("addEntreprise")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  addEntreprise(@Body() addEntreprise : AddEntrepriseDto, @Req() req : Request){
    const user_id = req.user["Fermier_id"]
    return this.entrepriseService.AddEntreprise(user_id,addEntreprise)
  }


  @Get("readEntreprise")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readEntreprise(@Req() req : Request){
    const Fermier_id = req.user["Fermier_id"]
    return this.entrepriseService.readEntreprise(Fermier_id)
  }

  @Get("readEntreprise/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readEntreprise_unique(@Req() req : Request, @Param("id", ParseIntPipe) Entreprise_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.entrepriseService.ReadEntreprise_unique(Fermier_id, Entreprise_id)
  }

  @Put("updateEntreprise/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  update_Entreprise(@Req() req : Request, @Param("id", ParseIntPipe) Entreprise_id : number, @Body() update_Entreprise : AddEntrepriseDto) {
    const Fermier_id = req.user["Fermier_id"]
    return this.entrepriseService.Update_Entreprise(Fermier_id, Entreprise_id, update_Entreprise)
  }

  @Put("DeleteEntreprise/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  delete_Entreprise(@Req() req : Request, @Param("id", ParseIntPipe) Entreprise_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.entrepriseService.Delete_Entreprise(Fermier_id, Entreprise_id)
  }
}
