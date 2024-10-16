import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get('404')
  notFound() {
    throw new NotFoundException();
  }

  @Get('500')
  internalError() {
    throw new InternalServerErrorException();
  }

  @Get('401')
  unauthorized() {
    throw new UnauthorizedException();
  }

  @Get('200')
  success() {
    return 'Hello, World!';
  }
}
