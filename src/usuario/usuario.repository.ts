import { Injectable } from '@nestjs/common';

@Injectable() //Torna a classe um Provider
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }
}