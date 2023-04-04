import { registerAs } from '@nestjs/config';

export enum Environment {
  DEV = 'development',
  PROD = 'production',
}

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT),
  env: process.env.NODE_ENV,
  database: {
    url: process.env.DATABASE_URL,
  },
}));
