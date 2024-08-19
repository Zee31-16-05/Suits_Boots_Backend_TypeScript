import { Category } from "../Interfaces/categoryInterface";

export const createCategory : string = `INSERT INTO category(category_id,categoryName) VALUES(?,?)`;
export const readAllCategory : string = `SELECT * FROM category`;
export const readCategoryByName : string = `SELECT * FROM category WHERE categoryName = ?`;
export const readCategoryById : string = `SELECT * FROM category WHERE category_id = ?`;
export const deleteCategoryById : string = `DELETE FROM category WHERE category_id = ?`;
export const updateCategoryById  = (updates : Category)=>{
    const setClause : string = Object.keys(updates).map(fields => `${fields} = ?`).join(', ');
    return `UPDATE category SET ${setClause} WHERE category_id = ?`
}

