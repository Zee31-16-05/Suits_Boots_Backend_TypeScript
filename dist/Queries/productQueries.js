"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductById = exports.deleteProductById = exports.readProductsByName = exports.readProductsById = exports.readAllProducts = exports.createProduct = void 0;
exports.createProduct = `INSERT INTO products(product_id, category_id,title,description,price,quantity) 
                                        VALUES(?,?,?,?,?,?)`;
exports.readAllProducts = `SELECT * FROM products`;
exports.readProductsById = `SELECT * FROM products WHERE id = ?`;
exports.readProductsByName = `SELECT * FROM products  WHERE name = ?`;
exports.deleteProductById = `DELETE FROM products WHERE id = ?`;
const updateProductById = (data) => {
    const setClause = Object.keys(data).map(field => `${field} = ?`).join(', ');
    return `UPDATE products set ${setClause} WHERE id = ?`;
};
exports.updateProductById = updateProductById;
