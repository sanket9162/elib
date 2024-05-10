import express from "express";
import { creatUSer, loginUser } from "./userController";
const userRouter = express.Router();

userRouter.post("/register", creatUSer);
userRouter.post("/login", loginUser);

export default userRouter;
