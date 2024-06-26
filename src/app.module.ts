import { Module } from '@nestjs/common';
import { DatabaseModule } from './services/database/database.module';
import { AppConfigModule, AppConfigService, PgConfigModule } from './config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryModule } from './api/category/category.module';
import { ProductModule } from './api/product/product.module';

@Module({
  imports: [
    ConfigModule,
    AppConfigModule,
    PgConfigModule,
    DatabaseModule,
    CategoryModule,
    ProductModule,
  ],
  providers: [ConfigService, AppConfigService, AppConfigService],
})
export class AppModule {}
