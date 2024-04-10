import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, Services } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: Services.PRODUCT,
        transport: Transport.TCP,
        options: {
          host: envs.productsMsHost,
          port: envs.productsMsPort,
        },
      },
    ]),
  ],
})
export class ProductsModule {}