import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { VenteService } from './vente.service';
import { ApiBasicAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { AddDecesDto } from '../deces/dto/addDeces.dto';
import { Request } from 'express';
import { AddVenteDto } from './dto/AddVente.dto';

@Controller('vente')
export class VenteController {
  constructor(
    private readonly venteService : VenteService
  ) {
  }

  @Post("addVente")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  addVente(@Body() addVente : AddVenteDto, @Req() req : Request){
    const user_id = req.user["Fermier_id"]
    return this.venteService.AddVente(user_id,addVente)
  }


  @Get("readVente")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readVente(@Req() req : Request){
    const Fermier_id = req.user["Fermier_id"]
    return this.venteService.readVente(Fermier_id)
  }

  @Get("readVente/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readVente_unique(@Req() req : Request, @Param("id", ParseIntPipe) Vente_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.venteService.ReadVente_unique(Fermier_id, Vente_id)
  }

  @Put("updateVente/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  update_Vente(@Req() req : Request, @Param("id", ParseIntPipe) Vente_id : number, @Body() update_vente : AddVenteDto) {
    const Fermier_id = req.user["Fermier_id"]
    return this.venteService.Update_Vente(Fermier_id, Vente_id, update_vente)
  }

  @Put("DeleteVente/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  delete_Vente(@Req() req : Request, @Param("id", ParseIntPipe) Vente_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.venteService.Delete_Vente(Fermier_id, Vente_id)
  }
}
