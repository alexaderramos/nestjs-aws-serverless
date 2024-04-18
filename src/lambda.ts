import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@codegenie/serverless-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Callback, Context, Handler } from 'aws-lambda';
import { ValidationPipe } from '@nestjs/common';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['error'] });

  // validation
  app.useGlobalPipes(new ValidationPipe());
  // swagger
  const config = new DocumentBuilder()
    .setTitle('Api test')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('api_')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //end swagger

  // await app.listen(3000);
  app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
