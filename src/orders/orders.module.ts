import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, Services } from 'src/config';

@Module({
  controllers: [OrdersController],
  imports: [
    ClientsModule.register([
      {
        name: Services.ORDER,
        transport: Transport.TCP,
        options: {
          host: envs.ordersMsHost,
          port: envs.ordersMsPort,
        },
      },
    ]),
  ],
})
export class OrdersModule {}
