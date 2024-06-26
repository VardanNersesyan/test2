import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductRequestDto, UpdateProductRequestDto } from './dto';
import {ProductListRequestDto} from "./dto/product-list.request.dto";

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductRequestDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@Query() productListDto: ProductListRequestDto) {
    return this.productService.findAll(productListDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductRequestDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
