import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async create(@Body() createCatDto: CreateUserDto) {
    await this.usersService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':userName')
  async findOne(@Param('userName') userName: string): Promise<User> {
    return this.usersService.findOne(userName);
  }

  @Delete(':userName')
  async delete(@Param('userName') userName: string) {
    return this.usersService.delete(userName);
  }
}
