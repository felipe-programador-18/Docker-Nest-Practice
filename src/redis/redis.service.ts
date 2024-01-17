import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';



@Injectable()
export class RedisService {
  private readonly client: Redis.Redis;

  constructor() {
    this.client = new Redis();
  }

  getClient(): Redis.Redis {
    return this.client;
  }
}