import { utilities } from 'nest-winston';
import { format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { Console } from 'winston/lib/winston/transports';

export const consoleTransport = new Console({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.ms(),
    utilities.format.nestLike('NestAAA'),
  ),
});
export function createDailyRotateTransport(level: string, filename: string) {
  return new DailyRotateFile({
    level,
    dirname: 'logs',
    filename: `logs/${filename}.%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: format.combine(format.timestamp(), format.simple()),
  });
}
