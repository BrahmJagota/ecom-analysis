import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsUUID,
  IsInt,
} from 'class-validator';

export class CreateSaleDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  pricePerUnit: number;

  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @IsString()
  @IsNotEmpty()
  category: string;
}

export class ProductDto {
  @IsUUID()
  @IsNotEmpty()
  productId: string
  
  @IsUUID()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  name: string;
  
  
  @IsString()
  category: string;

  @IsInt()
  price: number
}