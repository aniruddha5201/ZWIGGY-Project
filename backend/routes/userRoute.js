import express from 'express';
import { loginUser,registerUser,totalUsers } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.get('/allusers',totalUsers)
export default userRouter;