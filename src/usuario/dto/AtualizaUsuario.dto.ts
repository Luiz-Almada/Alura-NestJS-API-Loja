//import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { IsOptional } from 'class-validator';
//import { EmailEhUnico } from '../validacao/email-eh-unico.validator';
import { CriaUsuarioDTO } from './CriaUsuario.dto';
import { PartialType } from '@nestjs/mapped-types';

//export class AtualizaUsuarioDTO {
export class AtualizaUsuarioDTO extends PartialType(CriaUsuarioDTO) {
  //Com extends e PartialType não precisa definir nenhuma propiedade
  /*   @IsOptional()
  nome: string;

  @IsOptional()
  email: string;

  @IsOptional()
  senha: string; */
}
