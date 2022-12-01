import { Injectable } from '@nestjs/common';

@Injectable()
export class SigninService {
  getSigninPage(): string {
    return 'This is signin page';
  }
}
