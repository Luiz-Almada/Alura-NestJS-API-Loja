import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { PedidoEntity } from './pedido.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ProdutoEntity } from 'src/produto/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioEntity, PedidoEntity, ProdutoEntity]),
  ],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
