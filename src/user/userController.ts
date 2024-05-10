import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const creatUSer = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const error = createHttpError(400, "All field are required");
    return next(error);
  }

  const user = await userModel.findOne({ email });

  if (user) {
    const error = createHttpError(400, "User already exists with this email");
    return next(error);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = sign({ sub: (await newUser)._id }, config.jwtSecret as string, {
    expiresIn: "7d",
  });
  res.json({
    _accessToken: token,
  });
};

export { creatUSer };
