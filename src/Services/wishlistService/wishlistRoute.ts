import express, {Request, Response} from 'express'
import * as wishlistController from './wishlistController'
import { Wishlist } from '../../Interfaces/wishlistInterface'

const router = express.Router()

router.post('/create-wishlist',(req:Request, res:Response) => {
    return wishlistController.addWishlist(req, res)
})

router.get('/get-wishlist-id', (req:Request, res:Response) =>{
    return wishlistController.getWishlistById(req, res)
})

router.get('/get-all-wishlist', (req:Request, res:Response)=>{
    return wishlistController.getAllWishlist(req, res)
})

router.delete('/delete-wishlist', (req:Request, res:Response) =>{
    return wishlistController.deleteWishlist(req, res)
});

export default router

