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
exports.deleteCategory = exports.getAllCategory = exports.getCategoryById = exports.addCategory = void 0;
const categoryQueries_1 = require("../../Queries/categoryQueries");
const dbConnection_1 = __importDefault(require("../../DatabaseConnection/dbConnection"));
const addCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqBody = req.body;
        console.log("category request body: ", reqBody);
        const reqBodyValues = Object.values(reqBody);
        console.log("reqBodyValues: ", reqBodyValues);
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(categoryQueries_1.createCategory, reqBodyValues)
                .then(([result, fields]) => {
                resolve([result, fields]);
                res.status(201).json(result);
            })
                .catch((err) => {
                console.log("error creating category...", err);
                res.status(500).json(err);
            });
        });
        console.log("Category created successfully---", result);
    }
    catch (err) {
        console.log("Failed to add category..err", err);
    }
});
exports.addCategory = addCategory;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params;
        console.log("my 0000: ", req.params);
        const valueOfId = Object.values(id);
        console.log("valueOfId: ", valueOfId);
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(categoryQueries_1.readCategoryById, valueOfId)
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
        console.log("Error getting category..", err);
    }
});
exports.getCategoryById = getCategoryById;
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const [result, fields] = yield new Promise((resolve, reject) => {
            connection.query(categoryQueries_1.readAllCategory)
                .then(([result, fields]) => {
                resolve([result, fields]);
                res.status(200).json(result);
            })
                .catch((error) => {
                reject(error);
                res.status(404).json(error);
            });
        });
        console.log("result all categories--", result);
    }
    catch (err) {
        console.log("Error getting All category....", err);
    }
});
exports.getAllCategory = getAllCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params;
        console.log("id is " + id);
        let valueofId = Object.values(id);
        console.log("valueofId is---", valueofId);
        const connection = yield (0, dbConnection_1.default)(); // Await the connection
        const [result, fields] = yield connection.query(categoryQueries_1.readCategoryById, valueofId);
        console.log("my result is---", result);
        if (result.length === 0) {
            throw new Error("No category found");
        }
        const [data, field] = yield new Promise((resolve, reject) => {
            connection.query(categoryQueries_1.deleteCategoryById, valueofId)
                .then(([result, field]) => {
                resolve([result, field]);
                res.status(201).json(result);
            })
                .catch((error) => {
                reject(error);
                res.status(404).json(error);
            });
        });
        console.log("Successfully deleted---", data);
    }
    catch (err) {
        console.log("Error deleting category by id", err);
    }
});
exports.deleteCategory = deleteCategory;
