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
exports.deleteWishlist = exports.getWishlistById = exports.getAllWishlist = exports.addWishlist = void 0;
const dbConnection_1 = __importDefault(require("../../DatabaseConnection/dbConnection"));
const wishlistQueries_1 = require("../../Queries/wishlistQueries");
const addWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log("Wishlist body: ", body);
        const values = Object.values(body);
        console.log("Wishlist values: ", values);
        const connection = yield (0, dbConnection_1.default)();
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(wishlistQueries_1.createWishlist, values)
                .then(([result, fields]) => {
                resolve([result, fields]);
                res.status(201).json(result);
            })
                .catch((error) => {
                reject(error);
                res.status(500).json(error);
            });
        });
        console.log("result", result);
    }
    catch (err) {
        console.log("Error came from addWishlist API....", err);
        res.status(500).json(err);
    }
});
exports.addWishlist = addWishlist;
const getAllWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(wishlistQueries_1.readAllWishlist)
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
        console.log("Error came from addWishlist API....", err);
        res.status(500).json(err);
    }
});
exports.getAllWishlist = getAllWishlist;
const getWishlistById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log("getProductById----", id);
        const values = Object.values(id);
        console.log("getProductById----", values);
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(wishlistQueries_1.readWishlistById, id)
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
        console.log("Error came from addWishlist API....", err);
        res.status(500).json(err);
    }
});
exports.getWishlistById = getWishlistById;
const deleteWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log("id.....", id);
        const values = Object.keys(id);
        console.log("values....", values);
        const connection = yield (0, dbConnection_1.default)();
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(wishlistQueries_1.deleteWishlistById, id)
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
        console.log("Error came from  API....", err);
        res.status(500).json(err);
    }
});
exports.deleteWishlist = deleteWishlist;
