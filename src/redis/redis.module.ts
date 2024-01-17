import { Module } from '@nestjs/common';
// import { RedisService } from 'nestjs-redis';
import { RedisModule } from 'nestjs-redis';


// this is just to created connection in redisclient
@Module({
   imports: [RedisModule]
})
export class AppModuleRedis {}
