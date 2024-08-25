"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWishlistById = exports.deleteWishlistById = exports.readWishlistById = exports.readAllWishlist = exports.createWishlist = void 0;
exports.createWishlist = `INSERT INTO wishlist (wishlist_id,product_id) VALUES(?,?)`;
exports.readAllWishlist = `SELECT * FROM wishlist`;
exports.readWishlistById = `SELECT * FROM wishlist WHERE wishlist_id = ?`;
exports.deleteWishlistById = `DELETE FROM wishlist WHERE wishlist_id = ?`;
const updateWishlistById = (data) => {
    const setClause = Object.keys(data).map(field => `${field} = ?`).join(', ');
    return `UPDATE wishlist set ${setClause} WHERE wishlist_id = ?`;
};
exports.updateWishlistById = updateWishlistById;
