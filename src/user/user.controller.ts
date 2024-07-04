import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
  @Post("/add")
  Add_user(@Body() user: UserDto) {
    return this.userService.Add_User(user)
  }
}
