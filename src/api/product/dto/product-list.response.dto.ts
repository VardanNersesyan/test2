import {ProductResponseDto} from "./product.response.dto";
import {ProductEntity} from "../entities/product.entity";

export class ProductListResponseDto {
    total: number;
    page: number;
    perPage: number;
    items: ProductResponseDto[];

    constructor(total: number, page: number, perPage: number, items: ProductEntity[]) {
        this.total = total;
        this.page = page;
        this.perPage = perPage;
        this.items = items.map(
            (item) => new ProductResponseDto(item.get({ plain: true })),
        );
    }
}
