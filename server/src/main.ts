import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const clientURL = configService.get('config.client_url');
  app.enableCors({
    origin: clientURL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type',
  });

  const port = configService.get('config.port');
  await app.listen(port);
}
bootstrap();
