import express, { Request,Response } from "express";
import * as productController from "../productService/productController"

const router = express.Router()

router.post('/create-new-product', (req:Request, res:Response) => {
    return productController.addProduct(req,res)
})

router.get('/get-all-products', (req:Request, res:Response) => {
    return productController.getAllProducts(req,res)
})

router.get('/get-product-id/:id', (req:Request, res:Response) => {
    return productController.getProductById(req,res)
})

router.get('/get-product-name',(req:Request, res:Response) => {
    return productController.getProductByName(req,res)
})

router.delete('/delete-product-id/:id',(req:Request, res:Response)=>{
    return productController.deleteProduct(req,res)
})

export default router;