import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PgService } from './database/pg.service';
import { SalesController } from './sales/sales.controller';
import { SalesModule } from './sales/sales.module';
import { CacheModule } from '@nestjs/cache-manager';
// import { RedisOptions } from './configs/app-options.constants';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({isGlobal: true}),
    // CacheModule.registerAsync(RedisOptions),    
    SalesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
