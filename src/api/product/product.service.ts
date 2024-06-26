import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateProductRequestDto, UpdateProductRequestDto, CreateProductResponseDto, ProductResponseDto} from './dto';
import { ProductRepository } from './product.repository';
import {SkuService} from "./sku.service";
import {UpdateProductResponseDto} from "./dto/update-product.response.dto";
import {DefaultResponseUtility} from "../../common/utilities/responses.utility";
import {Pagination} from "./interfaces/product.interface";
import {ProductListResponseDto} from "./dto/product-list.response.dto";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository,  private readonly skuService: SkuService) {}
  async create(createProductDto: CreateProductRequestDto) {
    const sku = this.skuService.generateSku();
    const product = await this.productRepository.createProduct({
      ...createProductDto,
      sku
    });

    return new CreateProductResponseDto(product.get({ plain: true }));
  }

  async findAll(pagination: Pagination) {
    const list = await this.productRepository.getProductList(pagination);

    return new ProductListResponseDto(
        list.total,
        list.page,
        list.perPage,
        list.items,
    )
  }

  async findOne(id: number) {
    const product = await this.productRepository.getProductById(id);

    return new ProductResponseDto(product.get({ plain: true }));
  }

  async update(id: number, updateProductDto: UpdateProductRequestDto) {
    const updatedProduct = await this.productRepository.updateProductById(id, updateProductDto);
    return new UpdateProductResponseDto(updatedProduct.get({ plain: true }));
  }

  async remove(id: number) {
    const result = await this.productRepository.removeProductById(id);

    if (!result) {
      throw new NotFoundException(['Product not found']);
    }

    return new DefaultResponseUtility({success: !!result})
  }
}
