"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategoryById = exports.deleteCategoryById = exports.readCategoryById = exports.readCategoryByName = exports.readAllCategory = exports.createCategory = void 0;
exports.createCategory = `INSERT INTO category(category_id,categoryName) VALUES(?,?)`;
exports.readAllCategory = `SELECT * FROM category`;
exports.readCategoryByName = `SELECT * FROM category WHERE categoryName = ?`;
exports.readCategoryById = `SELECT * FROM category WHERE category_id = ?`;
exports.deleteCategoryById = `DELETE FROM category WHERE category_id = ?`;
const updateCategoryById = (updates) => {
    const setClause = Object.keys(updates).map(fields => `${fields} = ?`).join(', ');
    return `UPDATE category SET ${setClause} WHERE category_id = ?`;
};
exports.updateCategoryById = updateCategoryById;
