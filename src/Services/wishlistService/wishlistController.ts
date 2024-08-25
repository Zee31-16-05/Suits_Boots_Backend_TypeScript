import createConnection from "../../DatabaseConnection/dbConnection";
import express,{ Request,Response } from "express";
import { createWishlist,readAllWishlist,readWishlistById,deleteWishlistById,updateWishlistById } from "../../Queries/wishlistQueries";
import {Wishlist}  from "../../Interfaces/wishlistInterface";
import { FieldPacket } from "mysql2";

export const addWishlist = async (req: Request, res: Response): Promise<void> => {
    try{
        const body = req.body;
        console.log("Wishlist body: ",body);

        const values = Object.values(body);
        console.log("Wishlist values: ",values);

        const connection = await createConnection()

        const [result,fields]:[Wishlist[],FieldPacket[]] = await new Promise((resolve, reject) => {

            connection.query<Wishlist[]>(createWishlist,values)
            .then(([result,fields])=>{
                resolve([result,fields])
                res.status(201).json(result)
            })
            .catch((error)=>{
                reject(error)
                res.status(500).json(error)
            })

        })
        console.log("result",result);
        

    }
    catch(err){
        console.log("Error came from addWishlist API....", err);
        res.status(500).json(err)
        
    }
}

export const getAllWishlist = async(req: Request, res: Response) : Promise<void> => {
    try{
        const connection = await createConnection(); // Await the connection

        const [result,fields] : [Wishlist[],FieldPacket[]] = await new Promise((resolve,reject)=>{
            connection.query<Wishlist[]>(readAllWishlist)
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
        console.log("Error came from addWishlist API....", err);
        res.status(500).json(err)
    }
}

export const getWishlistById = async(req: Request,res: Response): Promise<void> => {
    try{

        const id = req.params.id
        console.log("getProductById----",id);

        const values = Object.values(id)
        console.log("getProductById----",values);

        const connection = await createConnection(); // Await the connection

        const [result,fields] : [Wishlist[],FieldPacket[]] = await new Promise((resolve, reject) => {
            connection.query<Wishlist[]>(readWishlistById,id)
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
        console.log("Error came from addWishlist API....", err);
        res.status(500).json(err)
    }
}

export const deleteWishlist = async(req: Request, res: Response): Promise<void> => {
    try{
        const id = req.params.id
        console.log("id.....",id);

        const values = Object.keys(id)
        console.log("values....",values);

        const connection = await createConnection()

        const[result,fields]:[Wishlist[],FieldPacket[]] = await new Promise((resolve,reject) =>{
            connection.query<Wishlist[]>(deleteWishlistById,id)
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
        console.log("Error came from  API....", err);
        res.status(500).json(err)
    }
}