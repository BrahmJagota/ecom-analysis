import { Injectable } from '@nestjs/common';
import { PgService } from 'src/database/pg.service';
import { CreateSaleDto, ProductDto } from './sales.dto';

@Injectable()
export class SalesService {
  constructor(private readonly db: PgService) {}

  async updateSale(productId: string, quantity: number) {
    console.log('updateSale');
    const query = `
  INSERT INTO product_sales_summary (product_id, day_sales, week_sales, month_sales)
  VALUES ($1, $2, $2, $2)
  ON CONFLICT (product_id)
  DO UPDATE SET
    day_sales = product_sales_summary.day_sales + $2,
    week_sales = product_sales_summary.week_sales + $2,
    month_sales = product_sales_summary.month_sales + $2
`;
    await this.db.query(query, [productId, quantity]);
  }

  async checkIfProductExists(productId: string) {
    console.log('checkIfExists');
    const query = `SELECT * FROM products WHERE product_id = $1`;
    return await this.db.query(query, [productId]);
  }

  async createProduct(dto: ProductDto) {
    console.log('createProduct');
    const { productId, userId, name, category, price } = dto;
    const query = `INSERT INTO products (product_id, user_id, name, category, price) VALUES ($1, $2, $3, $4, $5)`;
    const values = [productId, userId, name, category, price];
    return await this.db.query(query, values);
  }

  async handleSale(dto: CreateSaleDto) {
    const { userId, productId, quantity, pricePerUnit, totalAmount, category } =
      dto;

    const productExists = await this.checkIfProductExists(dto.productId);

    if (productExists.rows.length === 0) {
      await this.createProduct({
        productId: dto.productId,
        category: dto.category,
        price: dto.pricePerUnit,
        userId: dto.userId,
        name: '',
      });
    }

    const query = `
      INSERT INTO sales (
        "userId", "productId", "quantity",
        "pricePerUnit", amount, category
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`;

    const values = [
      userId,
      productId,
      quantity,
      pricePerUnit,
      totalAmount,
      category,
    ];
    this.updateSale(productId, quantity);
    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  async analyseTrend() {}
}
