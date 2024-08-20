import { RowDataPacket } from "mysql2";

export interface Product extends RowDataPacket {
    product_id: string
    category_id: string
    title: string
    description: string
    price: number
    quantity: number
}