import mysql, { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2"
import { User } from "../../Interfaces/userInterface"
import createConnection from "../../DatabaseConnection/dbConnection"
import queries from "../../Queries/queries"
import { Request, Response } from 'express';
import { resolve } from "path";
import { rejects } from "assert";
import { error } from "console";
const { createUser,readUsers,getUserById,deleteUser } = queries


export const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("entered in adding user API--");


        const reqBodyData = req.body;
        console.log("reqBodyData: ", reqBodyData);
        const data = Object.values(reqBodyData);
        console.log("Data: ", data);

        const connection = await createConnection(); // Await the connection

        // const result = await connection.query(createUser,data).then(value=>{
        //     console.log("my value---",value)
        // })
        // .catch(err => {
        //     console.log("Error came from addUser API",err.stack);

        // });


        let endResult: (Promise<[]> | object) = await new Promise((resolve, reject) => {
            connection.query(createUser, data)
                .then(result => {
                    console.log("result---", result);
                    resolve(result)
                    res.status(200).json(result); // Respond with the result
                })
                .catch(err => {
                    console.log("Error came from add-User API", err.stack);
                    reject(err)
                    res.status(500).json({ error: err.message });
                })
        })
        console.log("----------------------------------------------------------------");

        console.log("end result: ", endResult);


    } catch (err: any) {
        console.log("Error came from createUser API", err.stack);
    }
}

export const getAllUsers = async(req: Request, res: Response): Promise<void>=>{

    console.log("my request: ", req.body)
    const connection = await createConnection(); // Await the connection

    const [result,fields] : [User[],FieldPacket[]] =  await  new Promise((resolve,reject)=>{
        connection.query<User[]>(readUsers)
        .then(([result,fields])=>{
            console.log("my data inside then",result);
            resolve([result,fields]);
            res.status(200).json(result); 
        })
        .catch(err=>{
            console.log("my error",err.stack);
            reject(err);
            res.status(500).json(err) 
        })
    })
    console.log("my data....",result);

}

export const getSpecificUserById = async(req:Request, res:Response) : Promise<void>=>{
    try{
        console.log("my request: ", req.params)
        const connection = await createConnection(); // Await the connection

        const reqParamsData = req.params
        console.log("reqParamsData: ", reqParamsData);

        const paramsData = Object.values(reqParamsData)
        console.log("paramsData: ", paramsData);

        const [result,fields] : [User[],FieldPacket[]] = await new Promise((resolve, reject) =>{
            connection.query<User[]>(getUserById,paramsData)
            .then(([result,fields])=>{
                console.log("my result: ", result);
                resolve([result,fields]);
                res.status(200).json(result)   
            })
            .catch(err=>{
                console.log("entered in catch...",err);
                reject(err)
                res.status(500).json(err)
            })
            console.log("my result: ", result);
            
        })
    }
    catch(err){
        console.log("error came in getSpecificUserById function...",err);
        res.status(500).json(err)
    }
}

export const deleteUserById = async(req: Request, res:Response): Promise<void>=>{

    try{
        console.log("my request: ", req.params)
        const connection = await createConnection(); // Await the connection

        const reqParamsData = req.params
        console.log("reqParamsData: ", reqParamsData);

        const paramsData = Object.values(reqParamsData)
        console.log("paramsData: ", paramsData);
        
        const[result,fields] : [User[],FieldPacket[]] = await new Promise((resolve, reject) =>{
            connection.query<User[]>(deleteUser, paramsData)
            .then(([result,fields]) =>{
                resolve([result,fields]);
                res.status(200).json(result)
            })
            .catch(err=>{
                console.log("entered in catch...",err);
                reject(err)
                res.status(500).json(err)
                
            })
            
        })
        console.log("result: ", result);

    }
    catch(err:any){
        console.log("error came in deleteUserById function...",err.stack);
        res.status(500).json(err)
        
    }
}


