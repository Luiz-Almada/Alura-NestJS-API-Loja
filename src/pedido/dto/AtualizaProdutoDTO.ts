import { PartialType } from '@nestjs/mapped-types';
import { CriaPedidoDTO } from './CriaPedidoDTO';
export class AtualizaPedidoDTO extends PartialType(CriaPedidoDTO) {
}
