import { NextFunction, Request, Response } from "express";
import { CustomError } from "../types/customError";
import Author, { AuthorDocument } from "../models/Authors";

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
const createAuthor = async (author: AuthorDocument) => {
  return await author.save();
};

const updateAuthor = async (author: AuthorDocument) => {
  const foundAuthor = await Author.findById(author._id);
  if (foundAuthor) {
    console.log("author service update author", foundAuthor);
    return await foundAuthor.updateOne({
      firstname: author.firstname,
      lastname: author.lastname,
      avatar: author.avatar
    });
  } else {
    throw new CustomError(404, "Author not found");
  }
};

const deleteAuthor = async (authorId: string) => {
  const foundAuthor = await Author.findById(authorId);
  if (foundAuthor) {
    return await Author.findByIdAndDelete(authorId);
  } else {
    throw new CustomError(404, "Author not found");
  }
};

export default {
  createAuthor,
  updateAuthor,
  getAllAuthors,
  getSingleAuthor,
  deleteAuthor
};
