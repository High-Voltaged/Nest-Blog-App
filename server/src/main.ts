import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
  });
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('config.port');
  await app.listen(port);
}
bootstrap();
