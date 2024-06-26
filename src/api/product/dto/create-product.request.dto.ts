import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsAlphanumeric,
  Length,
} from 'class-validator';
import { CategoryExists } from '../../category/validators/category-exist.validator';

export class CreateProductRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @CategoryExists()
  readonly categoryId: number;
}
