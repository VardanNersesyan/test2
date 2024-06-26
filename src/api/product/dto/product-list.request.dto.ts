import { Transform } from 'class-transformer';
import { intParser } from '../../../common/utilities/sanitize.utility';
import { IsOptional, IsPositive } from 'class-validator';

export class ProductListRequestDto {
    @IsPositive()
    @IsOptional()
    @Transform(intParser)
    page?: number;

    @IsPositive()
    @IsOptional()
    @Transform(intParser)
    limit?: number;
}