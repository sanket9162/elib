import { Request, Response } from "express";

const creatUSer = async(req:Request, res:Response,) =>{
  
        res.json({
            message: 'User register'
        })
    
    }


export {creatUSer}