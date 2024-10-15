import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  return {
    port: Number(process.env.APP_PORT || 3000),
    globalPrefix: process.env.APP_GLOBAL_PREFIX || '',
  };
});
