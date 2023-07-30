/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createuser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid'
import { ListUserDTO } from './dto/listuser.dto';
import { UpdateUserDTO } from './dto/updateuser.dto';

@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) { }

  @Post()
  async create(@Body() userData: CreateUserDTO) {
    const user = new UserEntity();
    user.id = uuid();
    user.nome = userData.nome;
    user.email = userData.email;
    user.senha = userData.senha;

    this.userRepository.save(user)
    return { user: new ListUserDTO(user.id, user.nome), message: 'Usuario criado com sucesso!' };
  }

  @Get()
  async list() {
    const users = await this.userRepository.list();
    const listUser = users.map(
      user => new ListUserDTO(
        user.id,
        user.nome
      )
    )

    return listUser;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    const user = await this.userRepository.update(id, data);

    return {
      user: user,
      message: 'Usuario atualizado'
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const user = await this.userRepository.remove(id);

    return { user: user, message: 'Usuario removido com sucesso' };
  }

}