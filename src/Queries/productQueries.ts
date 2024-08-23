import { Product } from "../Interfaces/productInterface";

export const createProduct : string = `INSERT INTO products(product_id, category_id,title,description,price,quantity) 
                                        VALUES(?,?,?,?,?,?)`;

export const readAllProducts : string = `SELECT * FROM products`;

export const readProductsById : string = `SELECT * FROM products WHERE product_id = ?`;

export const readProductsByName : string = `SELECT * FROM products  WHERE title = ?`;

export const deleteProductById : string = `DELETE FROM products WHERE product_id = ?`;

export const updateProductById = (data: Product)=>{
    const setClause = Object.keys(data).map(field=> `${field} = ?`).join(', ');
    return `UPDATE products set ${setClause} WHERE id = ?`;
}