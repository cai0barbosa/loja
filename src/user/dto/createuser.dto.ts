import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { MailUnique } from '../validation/mail-unique.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;
  @IsEmail(undefined, { message: 'e-mail invilido' })
  @MailUnique({message: 'Já existe usuario com esse e-mail'})
  email: string;
  @MinLength(6, { message: 'A senha precisa ter no minimo 5' })
  senha: string;
}
