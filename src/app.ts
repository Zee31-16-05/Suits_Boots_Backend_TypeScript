// console.table(["zeeshan starting TYPESCRIPT PROJECT"])
console.table("its working fine now----");

import express, {Request, Response} from "express";
import connection from './DatabaseConnection/dbConnection'
import  userRoute from './Services/userService/userRoute'
import categoryRoute from "./Services/categoryService/categoryRoute"
import productRoute from "./Services/productService/productRoute"
import wishlistRoute from "./Services/wishlistService/wishlistRoute"
// console.log("connection",typeof userRoute)
// console.log("connection",userRoute)

const app = express();
const PORT = 8080;
const Hostname = 'localhost';
app.use(express.json())

app.use('/userService',userRoute)
app.use('/categoryService',categoryRoute)
app.use('/productService',productRoute)
app.use('/wishlistService',wishlistRoute)


app.listen(PORT,()=>{
    console.table([`listening on ${Hostname}: ${PORT}`]);
})