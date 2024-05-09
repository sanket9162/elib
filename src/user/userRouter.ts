import  express  from "express";
import { creatUSer } from "./userController";
const userRouter = express.Router()


userRouter.post('/register', creatUSer)

export default userRouter