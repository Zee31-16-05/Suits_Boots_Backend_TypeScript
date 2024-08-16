import express, { Request, Response } from 'express';
import * as userController from './userController';

const router = express.Router();

router.post('/create-user', (req: Request, res: Response) => {
    console.log("what is retruning...",typeof userController.addUser(req, res));
    return userController.addUser(req,res)
});

router.get('/getAll-user', (req: Request, res: Response) => {
    // console.log("what is retruning...",typeof userController.getAllUsers(req, res));
    return userController.getAllUsers(req,res)
});

router.get('/get-user/:id', (req: Request, res: Response) => {
    // console.log("what is retruning...",typeof userController.getAllUsers(req, res));
    return userController.getSpecificUserById(req, res)
});
    
export default router;