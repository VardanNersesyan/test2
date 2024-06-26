import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductEntity } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import {SkuService} from "./sku.service";

@Module({
  imports: [SequelizeModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductRepository, ProductService, SkuService],
  exports: [ProductRepository, ProductService, SkuService],
})
export class ProductModule {}
