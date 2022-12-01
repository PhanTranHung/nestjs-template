import { Module } from '@nestjs/common';
import { SigninController } from './signin.controller';
import { SigninService } from './signin.service';

@Module({
  imports: [],
  controllers: [SigninController],
  providers: [SigninService],
})
export class SigninModule {}
