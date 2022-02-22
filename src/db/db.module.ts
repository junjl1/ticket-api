import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://admin:admin@47.106.195.103:27017/?authSource=admin'),
    ],
})
export class DbModule {}
