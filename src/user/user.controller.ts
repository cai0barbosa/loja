/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createuser.dto';

@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async create(@Body() userData : CreateUserDTO) {
    this.userRepository.save(userData)
    return userData;
  }

  @Get()
  async list() {
    const users = this.userRepository.list();
    return users
  }
}