import { Global, Module } from '@nestjs/common';
import config, { Environment } from './server.config';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        DATABASE_URL: Joi.string().required(),
        NODE_ENV: Joi.string().valid(Environment.DEV, Environment.PROD).default(Environment.DEV),
      }),
      validationOptions: { allowUnknown: true },
    }),
  ],
})
export class ServerConfigModule {}
