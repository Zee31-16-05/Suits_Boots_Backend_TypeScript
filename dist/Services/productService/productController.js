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
exports.deleteProduct = exports.getProductByName = exports.getProductById = exports.getAllProducts = exports.addProduct = void 0;
const productQueries_1 = require("../../Queries/productQueries");
const dbConnection_1 = __importDefault(require("../../DatabaseConnection/dbConnection"));
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Product Request Body: ", req.body);
        const connection = yield (0, dbConnection_1.default)();
        let body = req.body;
        const values = Object.values(body);
        console.log("Values: " + values);
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(productQueries_1.createProduct, values)
                .then(([result, fields]) => {
                resolve([result, fields]);
                res.status(201).json(result);
            })
                .catch((error) => {
                reject(error);
            });
        });
        console.log("Product Response Body: ", result);
        // if(result){
        //     res.status(201).json(result)
        // }
    }
    catch (err) {
        console.log("Error came from addProduct API....", err);
        res.status(500).json(err);
    }
});
exports.addProduct = addProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(productQueries_1.readAllProducts)
                .then(([result, fields]) => {
                resolve([result, fields]);
                res.status(200).json(result);
            })
                .catch((error) => {
                reject(error);
                res.status(500).json(error);
            });
        });
        console.log("result all categories--", result);
    }
    catch (err) {
        console.log("Error came from getAllProducts API....", err);
        res.status(500).json(err);
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log("getProductById----", id);
        const values = Object.values(id);
        console.log("getProductById----", values);
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(productQueries_1.readProductsById, id)
                .then(([result, fields]) => {
                resolve([result, fields]);
                res.status(201).json(result);
            })
                .catch((err) => {
                reject(err);
                res.status(500).json(err);
            });
        });
        console.log("result is:---", result);
    }
    catch (err) {
        console.log("Error came from getProductById API....", err);
        res.status(500).json(err);
    }
});
exports.getProductById = getProductById;
const getProductByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Body = req.body;
        console.log("Body.....", Body);
        const values = Object.values(Body);
        console.log("Values...", values);
        const connection = yield (0, dbConnection_1.default)();
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(productQueries_1.readProductsByName, values)
                .then(([result, fields]) => {
                resolve([result, fields]);
                res.status(201).json(result);
            })
                .catch((error) => {
                reject(error);
                res.status(500).json(error);
            });
        });
        console.log("result is: ", result);
    }
    catch (err) {
        console.log("Error came from getProductByName API....", err);
        res.status(500).json(err);
    }
});
exports.getProductByName = getProductByName;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log("id.....", id);
        const values = Object.keys(id);
        console.log("values....", values);
        const connection = yield (0, dbConnection_1.default)();
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(productQueries_1.deleteProductById, id)
                .then(([result, fields]) => {
                resolve([result, fields]);
                res.status(201).json(result);
            })
                .catch((error) => {
                reject(error);
                res.status(500).json(error);
            });
        });
        console.log("Product deleted------", result);
    }
    catch (err) {
        console.log("Error came from deleteProductById API....", err);
        res.status(500).json(err);
    }
});
exports.deleteProduct = deleteProduct;
