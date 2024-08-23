import { Product } from "../../Interfaces/productInterface";
import { createProduct,readAllProducts,readProductsById, readProductsByName, deleteProductById } from "../../Queries/productQueries";
import { Request,Response } from "express";
import createConnection from "../../DatabaseConnection/dbConnection";
import { FieldPacket } from "mysql2";
import { log } from "console";
import { resolve } from "path";
import { rejects } from "assert";


export const addProduct = async(req: Request, res: Response) : Promise<void> => {

    try{
            console.log("Product Request Body: ",req.body);
            const connection = await createConnection()

            let body = req.body

            const values = Object.values(body)
            console.log("Values: " + values);
            


            const[result,fields] : [Product[],FieldPacket[]] = await new Promise((resolve, reject) => {
                connection.query<Product[]>(createProduct,values)
                .then(([result, fields]) =>{
                    resolve([result, fields])
                    res.status(201).json(result)
                })
                .catch((error) =>{
                    reject(error)
                })
                
            })
            console.log("Product Response Body: ", result);
            // if(result){
            //     res.status(201).json(result)
            // }
            

    }
    catch(err){
        console.log("Error came from addProduct API....", err);
        res.status(500).json(err)
        
    }
}

export const getAllProducts = async(req: Request, res: Response): Promise<void> => {
    try{
        
        const connection = await createConnection(); // Await the connection
        const [result,fields] : [Product[],FieldPacket[]] = await new Promise((resolve,reject)=>{
            connection.query<Product[]>(readAllProducts)
            .then(([result,fields])=>{
                resolve([result,fields]);
                res.status(200).json(result);
            })
            .catch((error)=>{
                reject(error);
                res.status(500).json(error)
            })
        })
        console.log("result all categories--",result);

    }
    catch(err){
        console.log("Error came from getAllProducts API....",err);
        res.status(500).json(err)
        
    }
}

export const getProductById = async(req: Request, res: Response): Promise<void> => {
    try{
        const id = req.params.id
        console.log("getProductById----",id);

        const values = Object.values(id)
        console.log("getProductById----",values);

        const connection = await createConnection(); // Await the connection

        const [result,fields] : [Product[],FieldPacket[]] = await new Promise((resolve, reject) => {
            connection.query<Product[]>(readProductsById,id)
            .then(([result, fields]) =>{

                resolve([result, fields])
                res.status(201).json(result)

            })
            .catch((err) =>{
                reject(err)
                res.status(500).json(err)
            })
        })
        console.log("result is:---",result);
        
        
        
    }
    catch(err){
        console.log("Error came from getProductById API....",err);
        res.status(500).json(err)
        
    }
}

export const getProductByName = async(req:Request, res:Response): Promise<void> => {
    try{
        const Body = req.body;
        console.log("Body.....",Body);

        const values = Object.values(Body);
        console.log("Values...",values);

        const connection = await createConnection()

        const[result,fields] : [Product[],FieldPacket[]] = await new Promise((resolve, reject) => {
            connection.query<Product[]>(readProductsByName,values)
            .then(([result, fields]) =>{
            resolve([result, fields])
            res.status(201).json(result)
            })
            .catch((error) =>{
                reject(error);
                res.status(500).json(error)
            })
        })
        console.log("result is: ",result);
        
    }
    catch(err){
        console.log("Error came from getProductByName API....",err);
        res.status(500).json(err)
    }
}

export const deleteProduct = async(req: Request, res: Response) : Promise<void> => {
    try{
        const id = req.params.id
        console.log("id.....",id);

        const values = Object.keys(id)
        console.log("values....",values);

        const connection = await createConnection()

        const[result,fields]:[Product[],FieldPacket[]] = await new Promise((resolve,reject) =>{
            connection.query<Product[]>(deleteProductById,id)
            .then(([result,fields]) =>{
                resolve([result,fields])
                res.status(201).json(result)
            })
            .catch((error) =>{
                reject(error)
                res.status(500).json(error)
            })
            
        })
        console.log("Product deleted------",result);
        
        
        
    }
    catch(err){
        console.log("Error came from deleteProductById API....",err);
        res.status(500).json(err)
    }
}