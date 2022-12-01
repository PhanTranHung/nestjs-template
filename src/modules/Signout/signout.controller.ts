import { Controller, Get, Ip, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from 'src/app.service';
import { SignoutService } from './signout.service';

@Controller({ path: '/signout' })
export class SignoutController {
  constructor(
    private readonly signoutService: SignoutService,
    private readonly appService: AppService,
  ) {}

  @Get()
  signout(): string {
    return this.signoutService.getSignoutPage();
  }

  @Get('/hello')
  hello(): string {
    return this.appService.getHello();
  }

  @Get('/request')
  request(@Req() request: Request, @Ip() ip: string) {
    return { headers: request.headers, ip };
  }
}
