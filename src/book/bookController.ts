import { NextFunction, Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import path from "path";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  // const {} = req.body;
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

  console.log("uploadResult", uploadResult);

  res.json({});
};

export { createBook };
