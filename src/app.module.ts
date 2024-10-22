import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    //Configura o Config do NestJS
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    //Configura TypeOrmModule
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    })
  ],
})
export class AppModule {}
