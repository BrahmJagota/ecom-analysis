interface ISales {
    productId: string;
    quantity: number;
    pricePerUnit: number;
    totalAmount: number;
    category?: string;
}