import { registerAs } from '@nestjs/config';

export default registerAs('appConf', () => ({
  port: process.env.API_PORT,
}));
