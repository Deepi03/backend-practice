import { Author } from "author";
import { Request, Response } from "express";
import uuid from "uuid4";

const getAllAuthors = (req: Request, res: Response) => {
  res.send({
    message: "You are at the Authors endpoint",
    status: 200
  });
};
const createAuthor = (req: Request, res: Response) => {
  const name = req.file?.filename
  const avatar = `http://localhost:8080/authorImages/${name}`;
  const { fullname } = req.body;
  const author: Author = {
    id: uuid(),
    fullname,
    avatar
  };
  console.log("author created");
  //save this author to database
  return res.status(201).json(author);
};

const singleAuthor = (req: Request, res: Response) => {
  const authorId = req.params.authorId;
  res.send(`Author id ${authorId} endpoint`);
};

const getBooksByAuthor = (req: Request, res: Response) => {
  const authorId = req.params.authorId;
  return res.send({
    authorId: authorId,
    message: `Books of author with  ${authorId}`,
    status: 200
  });
};

export { getAllAuthors, singleAuthor, getBooksByAuthor, createAuthor };
