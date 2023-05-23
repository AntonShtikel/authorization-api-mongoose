import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Redis from 'ioredis';
import * as fs from 'fs';
import * as process from 'process';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 5001);

  const redis = new Redis({
    host: 'redis',
    port: 6379,
  });

  console.log('Server works');
  fs.readFile('data-for-redis.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      redis.quit();
      return;
    }
    const lines = data.split('\n');
    lines.forEach((line) => {
      const [key, value] = line.split('. ');
      redis.set(key, value);
    });
    redis.quit();
  });
}
bootstrap();
