import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

const creatUSer = async(req:Request, res:Response,next:NextFunction) =>{


    const {name, email, password} = req.body

    if(!name || !email || !password){
        const error = createHttpError(400, "All field are required")
        return next(error) 
    }
        res.json({
            message: 'User register'
        })
    
    }


export {creatUSer}