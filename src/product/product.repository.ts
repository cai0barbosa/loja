import { Injectable } from '@nestjs/common';

/* eslint-disable prettier/prettier */
@Injectable()
export class ProductRepository {
  private produtos = [];

  async save(usuario) {
    this.produtos.push(usuario)
    console.log(usuario)
  }

  async list() {
    return this.produtos
  }
}