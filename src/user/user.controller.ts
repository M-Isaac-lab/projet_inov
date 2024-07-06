import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from '../jwtstrategy/jwt-auth.guard';
import { ApiBasicAuth, ApiBearerAuth, ApiProperty, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags("user")
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {

    }

  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  @Get("")
  Get_all_user() {
    return this.userService.Get_All_User()
  }

@ApiBasicAuth()
@UseGuards(JwtAuthGuard)
@Get("/:id")
  Get_one_user (@Param("id",ParseIntPipe) Fermier_id : number) {
    return this.userService.Get_One_User(Fermier_id)
}
}
