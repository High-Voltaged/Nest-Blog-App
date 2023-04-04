import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config, { Environment } from '../config/server.config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => ({
        type: 'postgres',
        url: configService.database.url,
        entities: [],
        synchronize: configService.env === Environment.DEV,
      }),
    }),
  ],
})
export class DatabaseModule {}
