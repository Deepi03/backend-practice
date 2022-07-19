import { Request, Response, NextFunction } from "express";

import { CustomError } from "../types/customError";

const checkAuthorId = (req: Request, res: Response, next: NextFunction) => {
  const authorId = req.params.authorId;
  if (Number(authorId) > 0) {
    console.log(`Author  ${authorId} from author middleware`);
  } else {
    throw new CustomError(400, "AuthorId must be greater than 0");
  }
  next();
};

const displayBooksOfAnAuthor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorId = req.params.authorId;
  if (Number(authorId) > 0) {
    console.log(`Author  ${authorId} from author middleware`);
  } else {
    throw new CustomError(400, "AuthorId must be greater than 0");
  }

  next();
};

export { checkAuthorId, displayBooksOfAnAuthor };
