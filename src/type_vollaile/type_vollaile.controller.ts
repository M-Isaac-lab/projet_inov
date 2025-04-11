import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TypeVollaileService } from './type_vollaile.service';
import { ApiBasicAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { AddDecesDto } from '../deces/dto/addDeces.dto';
import { Request } from 'express';
import { AddType_vollaileDto } from './dto/AddType_vollaile.dto';

@Controller('type-vollaile')
export class TypeVollaileController {
  constructor(
    private readonly type_vollaileService : TypeVollaileService
  ) {
  }
  @Post("addType_vollaile")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  addType_vollaile(@Body() addType_vollaile : AddType_vollaileDto, @Req() req : Request){
    const user_id = req.user["Fermier_id"]
    return this.type_vollaileService.AddType_vollaile(user_id,addType_vollaile)
  }


  @Get("readType_vollaile")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readType_vollaile(@Req() req : Request){
    const Fermier_id = req.user["Fermier_id"]
    return this.type_vollaileService.readType_vollaile(Fermier_id)
  }

  @Get("readType_vollaile/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  readType_vollaile_unique(@Req() req : Request, @Param("id", ParseIntPipe) Type_vollaile_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.type_vollaileService.ReadTypevollaile_unique(Fermier_id, Type_vollaile_id)
  }

  @Put("updateType_vollaile/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  update_Type_vollaile(@Req() req : Request, @Param("id", ParseIntPipe) Type_vollaile_id : number, @Body() update_Type_vollaile : AddType_vollaileDto) {
    const Fermier_id = req.user["Fermier_id"]
    return this.type_vollaileService.Update_Type_vollaile(Fermier_id, Type_vollaile_id, update_Type_vollaile)
  }

  @Put("DeleteType_vollaile/:id")
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  delete_Type_vollaile(@Req() req : Request, @Param("id", ParseIntPipe) Type_vollaile_id : number){
    const Fermier_id = req.user["Fermier_id"]
    return this.type_vollaileService.Delete_Type_vollaile(Fermier_id, Type_vollaile_id)
  }

}
