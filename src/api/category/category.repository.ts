import { Op } from 'sequelize';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions } from 'sequelize/types/model';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(CategoryEntity)
    private readonly categoryEntity: typeof CategoryEntity,
  ) {}

  autocomplete(search?: string) {
    const searchParams: FindOptions = {};

    if (search) {
      searchParams.where = {
        title: {
          [Op.iLike]: `%${search}%`,
        },
      };
    }

    return this.categoryEntity.findAll(searchParams);
  }
}
