import { Injectable } from '@nestjs/common';

@Injectable()
export class SignoutService {
  getSignoutPage(): string {
    return 'This is signout page';
  }
}
