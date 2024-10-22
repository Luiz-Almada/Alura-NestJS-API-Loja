import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //Configuração do PIPE do class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  //Informa para o class-validator (useContainer) utilizar a mesma resolução de dependências do NestJs
  useContainer(app.select(AppModule), {fallbackOnErrors: true});

  await app.listen(process.env.PORT ?? 3000, ()=>console.log(`Servidor escutando na porta: ${process.env.PORT ?? 3000}`));
}
bootstrap();
