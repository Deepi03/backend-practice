import { CustomError } from "../types/customError";
import Author, { AuthorDocument } from "../models/Authors";

const createAuthor = async (author: AuthorDocument) => {
  return await author.save();
};

const getAllAuthors = async () => {
  return await Author.find();
};

export default {
  createAuthor,
  getAllAuthors
};
