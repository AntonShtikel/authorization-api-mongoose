import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
@Controller('authorization')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/registration')
  userRegistration(@Body() userDto: UserDto) {
    return this.userService.userRegistration(userDto);
  }

  @Post('/login')
  userLogin(@Body() userDto: UserDto) {
    return this.userService.userLogin(userDto);
  }
}
