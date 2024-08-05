import mysql, { ResultSetHeader, RowDataPacket } from "mysql2"
import { User } from "../Interfaces/userInterface"
import createConnection from "../../DatabaseConnection/dbConnection"
import queries from "../Queries/queries"
import { Request, Response } from 'express';
import { resolve } from "path";
import { rejects } from "assert";
import { error } from "console";
const { createUser } = queries

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
                    console.log("Error came from addUser API", err.stack);
                    reject(err)
                    res.status(500).json({ error: err.message });
                })
        })
        console.log("----------------------------------------------------------------");

        console.log("end result: ", endResult);


    } catch (err: any) {
        console.log("Error came from createUser API", err.stack);
    }
};
