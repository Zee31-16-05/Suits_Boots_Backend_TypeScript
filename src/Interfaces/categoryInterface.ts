import { RowDataPacket } from "mysql2";

export interface Category extends RowDataPacket{
    catgory_id: string
    categoryName: string

}