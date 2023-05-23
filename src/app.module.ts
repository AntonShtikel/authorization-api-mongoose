import { Module } from '@nestjs/common';
import { UserModule } from './authorization/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as process from 'process';

@Module({
  imports: [UserModule, MongooseModule.forRoot(process.env.MONGOOSE_URL)],
  controllers: [],
  providers: [],
})
export class AppModule {}
