import express from 'express'
import {userRegister} from '../controllers/userController.js';
import { loginController } from '../controllers/userController.js';


const userRouter = express.Router();

userRouter.post('/register', userRegister);
userRouter.post('/login', loginController); 



export default userRouter;