import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
@Injectable()
export class AuthorizationService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async userRegistration(@Body() userDto: UserDto): Promise<UserDocument> {
    // function of registration user
    const existingUser = await this.userModel.findOne({ name: userDto.name });
    if (existingUser) {
      throw new Error('User exist! please authorize!');
    }
    // if credential are not exist in db -> save new user in db
    return new this.userModel(userDto).save();
  }

  async userLogin(@Body() userDto: UserDto): Promise<string> {
    // function of login user
    const existingUser = await this.userModel.findOne(userDto);
    if (existingUser) {
      // if credential exist in db -> return message of success
      return 'You are in system!';
    }
    return 'Wrong data(';
  }
}
