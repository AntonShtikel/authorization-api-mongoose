import { Module } from '@nestjs/common';
import { UserModule } from './authorization/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      `mongodb+srv://shtikelanton:1234@cluster0.o4cfyoc.mongodb.net/`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
