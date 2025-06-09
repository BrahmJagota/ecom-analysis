import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './sales.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post('create-sale')
  createSale(@Body() dto: CreateSaleDto ) {
    return this.salesService.handleSale(dto)
  }

  @Post('analyze-trend')
  analyseTrend(@Body() userId: string) {
    return this.salesService.analyseTrend(userId)
  }

  @Get('get-sales')
  getSales(@Query('user') userId: string) {
    return this.salesService.getSales(userId)
  }
}
