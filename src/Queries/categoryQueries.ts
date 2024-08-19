import { Category } from "../Interfaces/categoryInterface";

const createCategory : string = `INSERT INTO category(category_id,categoryName) VALUES(?,?)`;
const readAllCategory : string = `SELECT * FROM category`;
const readCategoryByName : string = `SELECT * FROM category WHERE categoryName = ?`;
const readCategoryById : string = `SELECT * FROM category WHERE category_id = ?`;
const deleteCategoryById : string = `DELETE FROM category WHERE category_id = ?`;
const updateCategoryById  = (updates : Category)=>{
    const setClause : string = Object.keys(updates).map(fields => `${fields} = ?`).join(', ');
    return `UPDATE category SET ${setClause} WHERE category_id = ?`
}


