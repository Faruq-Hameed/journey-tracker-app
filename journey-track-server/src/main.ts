import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { ResponseTransformInterceptor } from './common/interceptors/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    // forbidNonWhitelisted: true,
    transform: true,
  }));
  app.useGlobalInterceptors(new ResponseTransformInterceptor)
  app.useGlobalFilters(new HttpExceptionFilter)
  await app.listen(process.env.PORT ?? 3003);
}
bootstrap();
