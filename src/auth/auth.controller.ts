import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Services } from 'src/config';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(Services.NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Post('register')
  registerUser() {
    return this.client.send('auth.register.user', {});
  }

  @Post('login')
  loginUser() {
    return this.client.send('auth.login.user', {});
  }

  @Get('verify')
  verify() {
    return this.client.send('auth.verify.user', {});
  }
}
