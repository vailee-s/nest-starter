import { Controller, Get, Version } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'hello world';
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
