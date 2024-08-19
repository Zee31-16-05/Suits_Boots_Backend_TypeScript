import express,{Request,Response} from 'express'
import * as categoryController from "./categoryController"

const router = express.Router()

router.post('/create-category',async function(req:Request, res:Response){
    return categoryController.addCategory(req,res)
})

router.get('/get-category-id/:id',function(req:Request, res:Response){
    return categoryController.getCategoryById(req,res)
})

router.get('/get-all-categories',function(req:Request, res:Response){
    return categoryController.getAllCategory(req,res)
})

router.delete('/delete-category/:id',function(req:Request, res:Response){
    return categoryController.deleteCategory(req,res)
})


export default router