import { Router, Response, Request } from "express";
import fileUpload from "../middleware/multerservice";
import authorsController from "../controller/authorsController";
import authorsMiddleware from "../middleware/authorsMiddleware";

const authorRoute = Router();
authorRoute.get("", authorsController.getAllAuthors);
authorRoute.post(
  "",
  fileUpload,
  authorsMiddleware.removeEmptySpaces,
  authorsController.createAuthor
);
authorRoute.put(
  "/:authorId",
  fileUpload,
  authorsMiddleware.removeEmptySpaces,
  authorsController.updateAuthor
);
authorRoute.get("/:authorId", authorsController.getSingleAuthor);
authorRoute.delete("/:authorId", authorsController.deleteAuthor);
/* authorRoute.get("/:authorId/books", displayBooksOfAnAuthor, getBooksByAuthor); */

export default authorRoute;
