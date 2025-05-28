import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class PgService {
  private readonly pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'demo',
    password: 'jagota001',
    port: 5432,
  });

   async onModuleInit() {
    try {
      await this.pool.query('SELECT 1'); // Simple test query
      console.log('✅ PostgreSQL is connected.');
    } catch (err) {
      console.error('❌ Failed to connect to PostgreSQL:', err.message);
    }
  }

  async query(sql: string, params?: any[]) {
    return this.pool.query(sql, params);
  }
}
