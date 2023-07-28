import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductCreateDTO } from './dto/productcreate.dto';

@Controller('/produtos')
export class ProductController {
  constructor(private productRepository: ProductRepository) { }
  @Post()
  async create(@Body() produto: ProductCreateDTO) {
    this.productRepository.save(produto);
    return produto;
  }
  @Get()
  async list() {
    return this.productRepository.list();
  }
}
