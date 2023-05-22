import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { AuthorizationService } from './authorization.service';
@Controller('authorization')
export class AuthorizationController {
  constructor(private authorizationService: AuthorizationService) {}
  @Post('/registration')
  userRegistration(@Body() userDto: UserDto) {
    return this.authorizationService.userRegistration(userDto);
  }

  @Post('/login')
  userLogin(@Body() userDto: UserDto) {
    return this.authorizationService.userLogin(userDto);
  }
}
