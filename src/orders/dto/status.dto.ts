import { IsOptional, IsEnum } from 'class-validator';
import { OrderStatus, orderStatusList } from '../interfaces';

export class StatusDto {
  @IsOptional()
  @IsEnum(orderStatusList, {
    message: `Status must be one of the following values: ${orderStatusList}`,
  })
  status?: OrderStatus;
}
