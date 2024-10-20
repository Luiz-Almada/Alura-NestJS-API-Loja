import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' }) //Verifica também o IsDefined
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido' })
  @IsOptional()
  @EmailEhUnico({message: 'Já existe um usuário com este e-mail'})
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
