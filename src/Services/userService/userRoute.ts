import express, { Request, Response } from 'express';
import * as userController from './userController';
import { User } from '../../Interfaces/userInterface';

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
    
router.delete('/delete-user/:id',(req: Request, res: Response) => {

    return userController.deleteUserById(req,res)
})

export default router;