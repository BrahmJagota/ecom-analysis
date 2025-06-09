import { apiClient } from "../axios";

export async function fetchSales(userId: string) {
    const { data } = await apiClient.get(`/sales/get-sales?user=${userId}`);
    return data;
}

export async function createSale(dto: ISales) {
    const { data } = await apiClient.post(`/sales/create-sale`, dto);
    return data;
}