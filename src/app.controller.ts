import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';
import { Controller, Get, Version } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
  @Get()
  @Version('1')
  getHelloV1(): string {
    return 'hello world';
  }
  @Get()
  @Version('2')
  getHelloV2(): string {
    return 'hello world';
  }
}
