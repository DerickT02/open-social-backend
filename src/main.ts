import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
  .setTitle("Open-Social")
  .setDescription("Backend for open social")
  .setVersion("1.0")
  .build();

  app.enableCors()

  if (module.hot) { 
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document);
  await app.listen(3000);
  

 
}
bootstrap();
