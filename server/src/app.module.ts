import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import loggerOptions from './logger';

@Module({
  imports: [WinstonModule.forRoot(loggerOptions)],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
