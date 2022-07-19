import { NextFunction, Request, Response } from "express";
import { CustomError } from "../types/customError";
import Author, { AuthorDocument } from "../models/Authors";

const createAuthor = async (author: AuthorDocument) => {
  return await author.save();
};

const getAllAuthors = async () => {
  return await Author.find();
};

const getSingleAuthor = async (authorId: string) => {
  try {
    const foundAuthor = await Author.findById(authorId);
    if (!foundAuthor) {
      throw new CustomError(404, "Author with the provided id is not found");
    }
    return foundAuthor;
  } catch (e) {
    console.log(e);
    return;
  }
};

export default {
  createAuthor,
  getAllAuthors,
  getSingleAuthor
};
