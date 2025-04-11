import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { DecesService } from './deces.service';
import { AddDecesDto } from './dto/addDeces.dto';
import { ApiBasicAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { Request } from 'express';

@Controller('deces')
export class DecesController {
  constructor(
    private readonly decesService : DecesService
  ) {
  }


  @Post("addDeces")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  addDeces(@Body() addDecs : AddDecesDto, @Req() req : Request){
    const user_id = req.user["Fermier_id"]
    return this.decesService.AddDeces(user_id,addDecs)
  }


@Get("readDeces")
@ApiBasicAuth()
@UseGuards(JwtAuthGuard)
  readDeces(@Req() req : Request){
    const Fermier_id = req.user["Fermier_id"]
    return this.decesService.readDeces(Fermier_id)
}

  @Get("readDeces/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readDeces_unique(@Req() req : Request, @Param("id", ParseIntPipe) Deces_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.decesService.ReadDeces_unique(Fermier_id, Deces_id)
  }

@Put("updateDeces/:id")
@ApiBasicAuth()
@UseGuards(JwtAuthGuard)
  update_Deces(@Req() req : Request, @Param("id", ParseIntPipe) Deces_id : number, @Body() update_deces : AddDecesDto) {
  const Fermier_id = req.user["Fermier_id"]
  return this.decesService.Update_Deces(Fermier_id, Deces_id, update_deces)
}

@Put("DeleteDeces/:id")
@ApiBasicAuth()
@UseGuards(JwtAuthGuard)
  delete_Deces(@Req() req : Request, @Param("id", ParseIntPipe) Deces_id : number){
  const Fermier_id = req.user["Fermier_id"]
  return this.decesService.Delete_Deces(Fermier_id, Deces_id)
}


}
