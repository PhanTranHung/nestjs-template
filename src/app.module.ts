import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SigninController } from './modules/Signin/signin.controller';
import { SigninService } from './modules/Signin/signin.service';
import { SignoutController } from './modules/Signout/signout.controller';
import { SignoutService } from './modules/Signout/signout.service';

@Module({
  imports: [],
  controllers: [SigninController, AppController, SignoutController],
  providers: [AppService, SigninService, SignoutService],
})
export class AppModule {}
