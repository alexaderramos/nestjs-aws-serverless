import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  await app.listen(3000);
}

bootstrap();
