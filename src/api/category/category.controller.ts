import { Controller, Get, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import {
  CategoryAutocompleteRequestDto,
  CategoryAutocompleteResponseDto,
} from './dto';
import { ItemsListResponseUtility } from '../../common/utilities/responses.utility';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('autocomplete')
  async autocomplete(@Query() categoryRequest: CategoryAutocompleteRequestDto) {
    return new ItemsListResponseUtility<CategoryAutocompleteResponseDto>({
      success: true,
      items: await this.categoryService.autocomplete(categoryRequest),
    });
  }
}
