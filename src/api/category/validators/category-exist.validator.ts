import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { CategoryEntity } from '../entities/category.entity';

@ValidatorConstraint({ async: true })
@Injectable()
export class CategoryExistsValidator implements ValidatorConstraintInterface {
  async validate(categoryId: number, args: ValidationArguments) {
    const category = await CategoryEntity.findByPk(categoryId);
    return !!category;
  }

  defaultMessage(args: ValidationArguments) {
    return `Category with id ${args.value} does not exist.`;
  }
}

export function CategoryExists(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: CategoryExistsValidator,
    });
  };
}
