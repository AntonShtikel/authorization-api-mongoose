import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { UserDto } from './dto/user.dto';
import Redis from 'ioredis';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async userRegistration(@Body() userDto: UserDto): Promise<User> {
    // function of registration user
    const existingUser = await this.userModel.findOne({ name: userDto.name });
    if (existingUser) {
      throw new Error('User exist! please authorize!');
    }
    userDto.password = await bcrypt.hash(userDto.password, 3);
    // if credential are not exist in db -> save new user in db
    return new this.userModel(userDto).save();
  }

  async userLogin(@Body() userDto: UserDto): Promise<any> {
    const existingUser = await this.userModel.findOne({ name: userDto.name });
    const passwordCheck = await bcrypt.compare(
      userDto.password,
      existingUser.password,
    );
    if (!existingUser || !passwordCheck) {
      // if name or password do not match -> error message
      return 'Wrong data(';
    }
    const redis = new Redis({
      host: 'redis',
      port: 6379,
    });
    const request = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      request[i] = await redis.get(randomNumber.toString());
    }
    return request;
  }
}
