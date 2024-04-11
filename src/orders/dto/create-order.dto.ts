import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { OrderStatus, orderStatusList } from '../interfaces';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  totalAmount: number;

  @IsNumber()
  @IsPositive()
  totalItems: number;

  @IsEnum(orderStatusList, {
    message: `status must be one of the following values: ${orderStatusList}`,
  })
  @IsOptional()
  status: OrderStatus = 'PENDING';

  @IsBoolean()
  @IsOptional()
  paid?: boolean = false;
}
