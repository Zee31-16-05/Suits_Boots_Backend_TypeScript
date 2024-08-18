import { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
    id: string
    username: string
    email: string
    phone : number
    password : string
    
}