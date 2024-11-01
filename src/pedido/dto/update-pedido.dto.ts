import { PartialType } from '@nestjs/mapped-types';
import { CriaPedidoDTO } from './CriaPedidoDTO';

export class UpdatePedidoDto extends PartialType(CriaPedidoDTO) {}
