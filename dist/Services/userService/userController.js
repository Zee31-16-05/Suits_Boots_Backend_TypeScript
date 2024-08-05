"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const dbConnection_1 = __importDefault(require("../../DatabaseConnection/dbConnection"));
const queries_1 = __importDefault(require("../Queries/queries"));
const { createUser } = queries_1.default;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("entered in adding user API--");
        const reqBodyData = req.body;
        console.log("reqBodyData: ", reqBodyData);
        const data = Object.values(reqBodyData);
        console.log("Data: ", data);
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        // const result = await connection.query(createUser,data).then(value=>{
        //     console.log("my value---",value)
        // })
        // .catch(err => {
        //     console.log("Error came from addUser API",err.stack);
        // });
        let endResult = yield new Promise((resolve, reject) => {
            connection.query(createUser, data)
                .then(result => {
                console.log("result---", result);
                resolve(result);
                res.status(200).json(result); // Respond with the result
            })
                .catch(err => {
                console.log("Error came from addUser API", err.stack);
                reject(err);
                res.status(500).json({ error: err.message });
            });
        });
        console.log("----------------------------------------------------------------");
        console.log("end result: ", endResult);
    }
    catch (err) {
        console.log("Error came from createUser API", err.stack);
    }
});
exports.addUser = addUser;
