import { Expose, Type, Exclude } from 'class-transformer';
import {CategoryAutocompleteResponseDto} from "../../category/dto";

export class CreateProductResponseDto {
  title: string;
  description: string;
  sku: string;
  price: number;
  categoryId: number;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  createdAt: Date;

  @Expose()
  @Type(() => CategoryAutocompleteResponseDto)
  category: CategoryAutocompleteResponseDto;

  constructor(partial: Partial<CreateProductResponseDto>) {
    Object.assign(this, partial);
  }
}
