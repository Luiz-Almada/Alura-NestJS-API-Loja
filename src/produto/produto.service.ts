import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoEntity } from './produto.entity';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';

@Injectable()
export class ProdutoService {
  constructor (
    @InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>
  ){}

  async criaProduto(dadosProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();

    produtoEntity.nome = dadosProduto.nome;
    produtoEntity.usuarioId = dadosProduto.usuarioId;
    produtoEntity.valor = dadosProduto.valor;
    produtoEntity.quantidadeDisponivel = dadosProduto.quantidadeDisponivel;
    produtoEntity.descricao = dadosProduto.descricao;
    produtoEntity.categoria = dadosProduto.categoria;
    produtoEntity.caracteristicas = dadosProduto.caracteristicas;
    produtoEntity.imagens = dadosProduto.imagens;

    return this.produtoRepository.save(produtoEntity);
  }
}