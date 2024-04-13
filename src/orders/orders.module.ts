import { Module } from '@nestjs/common';

import { NastModule } from 'src/transports/nast.module';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
  imports: [NastModule],
})
export class OrdersModule {}
