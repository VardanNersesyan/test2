import { Exclude } from 'class-transformer';

export class CategoryAutocompleteResponseDto {
  id: number;
  title: string;
  description: string;
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  constructor(partial: Partial<CategoryAutocompleteResponseDto>) {
    Object.assign(this, partial);
  }
}
