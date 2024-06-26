import {Exclude, Expose, Type} from "class-transformer";
import {CategoryAutocompleteResponseDto} from "../../category/dto";

export class ProductResponseDto {
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

    constructor(partial: Partial<ProductResponseDto>) {
        Object.assign(this, partial);
    }
}