export interface IUpdateProduct {
    title?: string;
    description?: string;
    price?: number;
    categoryId?: number;
}

export interface IProduct {
    title: string;
    description: string;
    price: number;
    categoryId: number;
    sku: string;
}

export interface Pagination {
    page?: number;
    limit?: number;
}

