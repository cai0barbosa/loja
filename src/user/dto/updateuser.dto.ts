import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { MailUnique } from '../validation/mail-unique.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'e-mail invilido' })
  @MailUnique({message: 'Já existe usuario com esse e-mail'})
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter no minimo 5' })
  @IsOptional()
  senha: string;
}
