import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AllExceptionFilter } from './common/filters/all-exception.filter';
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT', 3000);
  const errorFilter = configService.get('ERROR_FILTER', 3000);
  const cors = configService.get('CORS', 3000);
  const prefix = configService.get('PREFIX', '/api');
  const versionStr = configService.get('VERSION', '1');
  let version = [versionStr];
  // 兼容多个版本
  if (versionStr.indexOf(',')) {
    version = versionStr.split(',');
  }

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  if (errorFilter) {
    const httpAdapter = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  }
  if (cors) app.enableCors();
  app.setGlobalPrefix(prefix);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion:
      typeof versionStr === 'undefined' ? VERSION_NEUTRAL : [...version],
  });
  console.log(`Application is running on: ${port}`);

  await app.listen(port);
}
bootstrap();
