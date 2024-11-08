import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
//import { Request, Response } from 'express';

//@Catch(HttpException)
@Catch()
export class FiltroDeExcecaoGlobal implements ExceptionFilter {
  constructor(private adapterHost: HttpAdapterHost) {}

  //catch(excecao: HttpException, host: ArgumentsHost) {
  catch(excecao: unknown, host: ArgumentsHost) {
    console.log(excecao);

    const { httpAdapter } = this.adapterHost;

    const contexto = host.switchToHttp();
    const resposta = contexto.getResponse<Response>();
    const requisicao = contexto.getRequest<Request>();
    //const status = excecao.getStatus();
    //const body = excecao.getResponse();

    const { status, body } =
      excecao instanceof HttpException
        ? {
            status: excecao.getStatus(),
            body: excecao.getResponse(),
          }
        : {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              timestamp: new Date().toISOString(),
              //path: requisicao.url,
              path: httpAdapter.getRequestUrl(requisicao),
            },
          };
    //resposta.status(status).json(body);
    httpAdapter.reply(resposta, body, status);
  }
}
