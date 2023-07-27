import { Injectable } from '@nestjs/common';

/* eslint-disable prettier/prettier */
@Injectable()
export class UserRepository {
  private usarios = [];

  async save(usuario) {
    this.usarios.push(usuario)
    console.log(usuario)
  }

  async list() {
    return this.usarios
  }
}