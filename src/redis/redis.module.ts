import { Module } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';


// this is just to created connection in redisclient
@Module({
    providers: [RedisService],
    exports:[RedisService]
})
export class RedisModule {
  

}
