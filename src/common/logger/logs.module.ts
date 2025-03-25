import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import {
  consoleTransport,
  createDailyRotateTransport,
} from './createRotateTransport';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log('configService', configService.get('LOG_ON'));
        const logOn = configService.get('LOG_ON') === 'true';
        return {
          transports: [
            consoleTransport,
            ...(logOn
              ? [
                  createDailyRotateTransport('info', 'info'),
                  createDailyRotateTransport('warn', 'warn'),
                  createDailyRotateTransport('error', 'error'),
                ]
              : []),
          ],
        };
      },
    }),
  ],
})
export class LogsModule {}
