// console.table(["zeeshan starting TYPESCRIPT PROJECT"])
console.table("its working fine now----");

import express, {Request, Response} from "express";
import connection from './DatabaseConnection/dbConnection'
import  userRoute from './Services/userService/userRoute'
console.log("connection",typeof userRoute)
console.log("connection",userRoute)

const app = express();
const PORT = 8080;
const Hostname = 'localhost';
app.use(express.json())

app.use('/userService',userRoute)


app.listen(PORT,()=>{
    console.table([`listening on ${Hostname}: ${PORT}`]);
})