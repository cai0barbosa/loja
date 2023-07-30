import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

/* eslint-disable prettier/prettier */
@Injectable()
export class UserRepository {
  private usuarios: UserEntity[] = [];

  async save(usuario: UserEntity) {
    this.usuarios.push(usuario)
  }

  async list() {
    return this.usuarios
  }

  async userExistsByEmail(email: string) {
    const user = this.usuarios.find(
      usuario => usuario.email === email
    )
    return user !== undefined;
  }

  async update(id: string, data: Partial<UserEntity>) {
    const user = this.usuarios.find(
      user => user.id === id
    );

    if (!user) throw new Error('Usuario não encontrado');

    Object.entries(data).forEach(([k,v]) => {
      if (k === 'id') return;

      user[k] = v;
    })

    return user;
  }

  async remove(id: string) {
    const user = this.usuarios.find(
      user => user.id === id
    );

    if (!user) throw new Error('Usuario não encontrado');

    this.usuarios = this.usuarios.filter(
      user => user.id !== id
    );
    
    return user;
  }
}