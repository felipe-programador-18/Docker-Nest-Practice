import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModuleRedis } from './redis/redis.module';


@Module({
  imports: [AppModuleRedis],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
