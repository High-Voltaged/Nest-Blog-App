import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import loggerOptions from './config/logger.config';
import config, { Environment } from './config/server.config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    WinstonModule.forRoot(loggerOptions),
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
    DatabaseModule,
  ],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
