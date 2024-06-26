import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductEntity } from './entities/product.entity';
import {IProduct, IUpdateProduct, Pagination} from "./interfaces/product.interface";
import {CategoryEntity} from "../category/entities/category.entity";

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(ProductEntity)
    private readonly productEntity: typeof ProductEntity,
  ) {}

  getProductById(id: number): Promise<ProductEntity> {
    return this.productEntity.findByPk(id, {
      include: [{ model: CategoryEntity, as: 'category' }]
    })
  }

  async getProductList(pagination: Pagination) {
    const { page = 1, limit = 10 } = pagination;

    const products = await this.productEntity.findAndCountAll({
      include: [{ model: CategoryEntity, as: 'category' }],
      limit,
      offset: (page - 1) * limit,
      order: [['id', 'DESC']],
    });

    return {
      total: products.count,
      page,
      perPage: limit,
      items: products.rows,
    }
  }

  async createProduct(product: IProduct): Promise<ProductEntity> {
    const newProduct = await this.productEntity.create(product);
    return this.getProductById(newProduct.id);
  }

  async updateProductById(id: number, productUpdate: IUpdateProduct): Promise<ProductEntity> {
    await this.productEntity.update(productUpdate, {
      where: {
        id
      },
    });

    return this.getProductById(id);
  }

  removeProductById(id: number): Promise<number> {
    return this.productEntity.destroy({
      where: { id }
    })
  }
}
