
import { NextFunction, Request, Response } from "express";
import fs from 'fs'
import sharp from 'sharp'
import imageService from "../services/imageService"

import uuid from "uuid4";

import Author  from '../models/Authors'
import  {CustomError}  from "../types/customError";
import authorService from "../services/authorService";


const getAllAuthors = async(req: Request, res: Response,next:NextFunction) => {
     const authors = await authorService.getAllAuthors()
     return res.json(authors)
};

const createAuthor = async(req: Request, res: Response,next: NextFunction) => {
 
  try{
    if(req.file?.path){
      const dataBuffer = fs.readFileSync(req.file?.path)
      const data = await sharp(dataBuffer).resize(200,200).toBuffer()
      const savedImage = await imageService.createImage(data)
      const avatar = `http://localhost:8080/authorImages/${savedImage._id}`
      const { fullname } = req.body;
      const author = new Author({
          fullname,
          avatar
      })
      const newAuthor = await authorService.createAuthor(author)
      return res.status(201).json(newAuthor);
      } else {
            throw new CustomError(404, 'File acannot be empty')
        }
  }
  catch (e) {
        return next(e)
    }
};

const singleAuthor = (req: Request, res: Response) => {
  const authorId = req.params.authorId;
  return res.send(`Author id ${authorId} endpoint`);
};

const getBooksByAuthor = (req: Request, res: Response) => {
  const authorId = req.params.authorId;
  return res.send({
    authorId: authorId,
    message: `Books of author with  ${authorId}`,
    status: 200
  });
};

export default { getAllAuthors, singleAuthor, getBooksByAuthor, createAuthor };
