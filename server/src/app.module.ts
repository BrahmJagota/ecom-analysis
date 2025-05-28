import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PgService } from './database/pg.service';
import { SalesController } from './sales/sales.controller';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    SalesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
