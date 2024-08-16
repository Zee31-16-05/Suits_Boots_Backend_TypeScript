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
exports.deleteUserById = exports.getSpecificUserById = exports.getAllUsers = exports.addUser = void 0;
const dbConnection_1 = __importDefault(require("../../DatabaseConnection/dbConnection"));
const queries_1 = __importDefault(require("../Queries/queries"));
const { createUser, readUsers, getUserById, deleteUser } = queries_1.default;
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
                console.log("Error came from add-User API", err.stack);
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
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("my request: ", req.body);
    const connection = yield (0, dbConnection_1.default)(); // Await the connection
    const [result, fields] = yield new Promise((resolve, reject) => {
        connection.query(readUsers)
            .then(([result, fields]) => {
            console.log("my data inside then", result);
            resolve([result, fields]);
            res.status(200).json(result);
        })
            .catch(err => {
            console.log("my error", err.stack);
            reject(err);
            res.status(500).json(err);
        });
    });
    console.log("my data....", result);
});
exports.getAllUsers = getAllUsers;
const getSpecificUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("my request: ", req.params);
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const reqParamsData = req.params;
        console.log("reqParamsData: ", reqParamsData);
        const paramsData = Object.values(reqParamsData);
        console.log("paramsData: ", paramsData);
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(getUserById, paramsData)
                .then(([result, fields]) => {
                console.log("my result: ", result);
                resolve([result, fields]);
                res.status(200).json(result);
            })
                .catch(err => {
                console.log("entered in catch...", err);
                reject(err);
                res.status(500).json(err);
            });
            console.log("my result: ", result);
        });
    }
    catch (err) {
        console.log("error came in getSpecificUserById function...", err);
        res.status(500).json(err);
    }
});
exports.getSpecificUserById = getSpecificUserById;
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("my request: ", req.params);
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const reqParamsData = req.params;
        console.log("reqParamsData: ", reqParamsData);
        const paramsData = Object.values(reqParamsData);
        console.log("paramsData: ", paramsData);
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(deleteUser, paramsData)
                .then(([result, fields]) => {
                resolve([result, fields]);
                res.status(200).json(result);
            })
                .catch(err => {
                console.log("entered in catch...", err);
                reject(err);
                res.status(500).json(err);
            });
        });
        console.log("result: ", result);
    }
    catch (err) {
        console.log("error came in deleteUserById function...", err.stack);
        res.status(500).json(err);
    }
});
exports.deleteUserById = deleteUserById;
