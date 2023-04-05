import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerConfigModule } from './config/config.module';
import loggerOptions from './config/logger.config';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
import { SeedingService } from './posts/services/seed.service';

@Module({
  imports: [WinstonModule.forRoot(loggerOptions), ServerConfigModule, DatabaseModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly seedingService: SeedingService) {}

  async onApplicationBootstrap() {
    await this.seedingService.seed();
  }
}
