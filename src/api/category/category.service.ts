import { Injectable } from '@nestjs/common';
import {
  CategoryAutocompleteRequestDto,
  CategoryAutocompleteResponseDto,
} from './dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async autocomplete(
    categoryRequest: CategoryAutocompleteRequestDto,
  ): Promise<CategoryAutocompleteResponseDto[]> {
    const categories = await this.categoryRepository.autocomplete(
      categoryRequest.search,
    );

    return categories.map(
      (category) =>
        new CategoryAutocompleteResponseDto(category.get({ plain: true })),
    );
  }
}
