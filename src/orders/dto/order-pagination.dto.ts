import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common';
import { type OrderStatus, orderStatusList } from '../interfaces/order';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(orderStatusList, {
    message: `Status must be one of the following values: ${orderStatusList}`,
  })
  status?: OrderStatus;
}
