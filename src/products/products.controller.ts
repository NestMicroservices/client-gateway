import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  create() {
    return 'create product';
  }

  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return id;
  }

  @Patch(':id')
  Update(@Param('id') id: number) {
    return id;
  }

  @Delete(':id')
  Delete(@Param('id') id: number) {
    return id;
  }
}
