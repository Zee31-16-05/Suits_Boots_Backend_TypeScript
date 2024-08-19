import {createCategory,readAllCategory,readCategoryById,readCategoryByName,deleteCategoryById,updateCategoryById} from "../../Queries/categoryQueries"

import createConnection from "../../DatabaseConnection/dbConnection"
import { Category } from "../../Interfaces/categoryInterface"
import { Request,Response } from "express"
import { FieldPacket } from "mysql2"
import { connect } from "http2"
import { resolve } from "path"
import { rejects } from "assert"

export const addCategory = async (req: Request, res: Response):Promise<void>=>{
    try{
        const reqBody : Category = req.body
        console.log("category request body: ",reqBody);

        const reqBodyValues : any[] = Object.values(reqBody)
        console.log("reqBodyValues: ",reqBodyValues);

        const connection = await createConnection(); // Await the connection

        
        const [result,fields] : [Category[],FieldPacket[]] = await new Promise((resolve, reject) =>{

            connection.query<Category[]>(createCategory,reqBodyValues)
            .then(([result,fields])=>{
                resolve([result,fields]);
                res.status(201).json(result)
            })
            .catch((err)=>{
                console.log("error creating category...",err);
                res.status(500).json(err)
            })
        })
        console.log("Category created successfully---",result);
        
        
    }
    catch(err){
        console.log("Failed to add category..err",err);
        
    }
}

export const getCategoryById =  async(req:Request, res:Response):Promise<void> => {
    try{
        let id = req.params
        console.log("my 0000: ", req.params);

        const valueOfId = Object.values(id)
        console.log("valueOfId: ", valueOfId);
        
        const connection = await createConnection(); // Await the connection

        const [result,fields] : [Category[],FieldPacket[]] = await new Promise((resolve, reject) => {
            connection.query<Category[]>(readCategoryById,valueOfId)
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
        console.log("Error getting category..",err);
        
    }
}

export const getAllCategory = async(req: Request, res: Response):Promise<void> => {
    try{
        const connection = await createConnection(); // Await the connection
        const [result,fields] : [Category[],FieldPacket[]] = await new Promise((resolve,reject)=>{
            connection.query<Category[]>(readAllCategory)
            .then(([result,fields])=>{
                resolve([result,fields]);
                res.status(200).json(result);
            })
            .catch((error)=>{
                reject(error);
                res.status(404).json(error)
            })
        })
        console.log("result all categories--",result);
        

    }
    catch(err){
        console.log("Error getting All category....",err);
        
    }
}

export const deleteCategory = async(req: Request, res: Response): Promise<void> => {
    try{
        let id = req.params
        console.log("id is " + id);

        let valueofId = Object.values(id)
        console.log("valueofId is---",valueofId);

        const connection = await createConnection(); // Await the connection

        const[result,fields]:[Category[],FieldPacket[]] = await connection.query(readCategoryById,valueofId)
        console.log("my result is---",result);

        if(result.length ===0){
            throw new Error("No category found")
        }
        


        const [data,field] : [Category[],FieldPacket[]] = await new Promise((resolve, reject) => {
            connection.query<Category[]>(deleteCategoryById,valueofId)
            .then(([result,field]) => {
                resolve([result,field])
                res.status(201).json(result)
            })
            .catch((error) => {
                reject(error)
                res.status(404).json(error)
            })
        })
        console.log("Successfully deleted---",data);
        
        
        
    }
    catch(err){
        console.log("Error deleting category by id",err);
        
    }
}