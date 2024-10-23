import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  //Acá añadimos esta linea de codigo, en la que practicamente
  //indicamos que cada peticion realizada al servicio debe contar con la estructura
  //definida, sino esta sera rechazada.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  //Los dos ?? son una condicion que indica que si el puerto del env se encuentra ocupado, entonces sera mejor utilizar el 3000
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
