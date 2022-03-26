import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:admin@47.106.195.103:27017/ticket?authSource=admin',
    ),
    // MongooseModule.forRoot(
    //   'mongodb+srv://junjl:junjl@test.i0nwq.mongodb.net/test?retryWrites=true&w=majority',
    // ),
  ],
})
export class DbModule {}
