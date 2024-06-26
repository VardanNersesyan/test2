import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SkuService {
    generateSku(): string {
        const uuid = uuidv4();
        const sku = uuid.replace(/-/g, '').substring(0, 8).toUpperCase();
        return sku;
    }
}
