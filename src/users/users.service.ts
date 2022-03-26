import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(CreateUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(CreateUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(userName: string): Promise<User> {
    return this.userModel.findOne({ userName: userName }).exec();
  }

  async delete(userName: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ userName: userName })
      .exec();
    return deletedUser;
  }
}
