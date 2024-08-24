import { RowDataPacket } from "mysql2";

export interface Wishlist extends RowDataPacket{
    wishlist_id: string;
    product_id: string;
}