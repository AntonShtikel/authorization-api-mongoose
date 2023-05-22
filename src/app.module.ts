import { Module } from '@nestjs/common';
import { AuthorizationModule } from './authorization/authorization.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthorizationModule,
    MongooseModule.forRoot(
      `mongodb+srv://shtikelanton:1234@cluster0.o4cfyoc.mongodb.net/`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
