import express from "express";
import { createBook } from "./bookController";

const bookRouter = express.Router();

bookRouter.post("/book", createBook);

export default bookRouter;
