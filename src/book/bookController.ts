import { NextFunction, Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import path from "path";
import fs from "node:fs";
import bookModel from "./bookModel";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre } = req.body;
  console.log("files", req.files);
  const files = req.files as { [fiedname: string]: Express.Multer.File[] };

  const coverImageMineType = files.coverImage[0].mimetype.split("/").at(-1);
  const filename = files.coverImage[0].filename;
  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    filename
  );

  const uploadResult = await cloudinary.uploader.upload(filePath, {
    filename_override: __filename,
    folder: "book-covers",
    format: coverImageMineType,
  });

  const bookFileName = files.file[0].filename;
  const bookFilePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    bookFileName
  );

  const bookfileUploadResult = await cloudinary.uploader.upload(bookFilePath, {
    resource_type: "raw",
    filename_override: bookFileName,
    folder: "boookFileName",
    format: "pdf",
  });

  const newBook = await bookModel.create({
    title,
    genre,
    author: "663e0f1b97a788846565f4ca",
    coverImage: uploadResult.secure_url,
    file: bookfileUploadResult.secure_url,
  });

  await fs.promises.unlink(filePath);
  await fs.promises.unlink(bookFilePath);

  console.log("uploadResult", uploadResult);

  res.status(201).json({ id: newBook._id });
};

export { createBook };
