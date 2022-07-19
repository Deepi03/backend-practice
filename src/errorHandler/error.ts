import { Request, Response, NextFunction } from "express";

import { CustomError } from "../types/customError";

export const customErrorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.send({
      status: err.status,
      message: err.message
    });
  } else {
    return res.send(err.message);
  }
};
