import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AppController } from './app.controller';
import { ExceptionResponseFilterProvider } from './response/exception-response.filter';

@Module({
  imports: [importConfigModule()],
  controllers: [AppController],
  providers: [ExceptionResponseFilterProvider],
})
export class AppModule {}
