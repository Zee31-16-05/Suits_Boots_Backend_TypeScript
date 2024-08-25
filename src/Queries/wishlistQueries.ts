import { Wishlist } from "../Interfaces/wishlistInterface";

export const createWishlist : string = `INSERT INTO wishlist (wishlist_id,product_id) VALUES(?,?)`;

export const readAllWishlist : string = `SELECT * FROM wishlist`;

export const readWishlistById : string = `SELECT * FROM wishlist WHERE wishlist_id = ?`;

export const deleteWishlistById : string = `DELETE FROM wishlist WHERE wishlist_id = ?`;

export const updateWishlistById = (data: Wishlist)=>{
    const setClause = Object.keys(data).map(field=> `${field} = ?`).join(', ');
    return `UPDATE wishlist set ${setClause} WHERE wishlist_id = ?`;
}