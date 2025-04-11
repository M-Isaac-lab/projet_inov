import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { VagueService } from './vague.service';
import { ApiBasicAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { AddDecesDto } from '../deces/dto/addDeces.dto';
import { Request } from 'express';
import { AddVagueDto } from './dto/AddVague.dto';

@Controller('vague')
export class VagueController {
  constructor(
    private readonly vagueService : VagueService
  ) {
  }

  @Post("addVague")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  addVague(@Body() addVague : AddVagueDto, @Req() req : Request){
    const user_id = req.user["Fermier_id"]
    return this.vagueService.AddVague(user_id,addVague)
  }


  @Get("readVague")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readVague(@Req() req : Request){
    const Fermier_id = req.user["Fermier_id"]
    return this.vagueService.readVague(Fermier_id)
  }

  @Get("readVague/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readVague_unique(@Req() req : Request, @Param("id", ParseIntPipe) Vague_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.vagueService.ReadVague_unique(Fermier_id, Vague_id)
  }

  @Put("updateVague/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  update_Vague(@Req() req : Request, @Param("id", ParseIntPipe) Vague_id : number, @Body() update_vague : AddVagueDto) {
    const Fermier_id = req.user["Fermier_id"]
    return this.vagueService.Update_Vague(Fermier_id, Vague_id, update_vague)
  }

  @Put("DeleteVague/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  delete_Vague(@Req() req : Request, @Param("id", ParseIntPipe) Vague_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.vagueService.Delete_Vague(Fermier_id, Vague_id)
  }
}
