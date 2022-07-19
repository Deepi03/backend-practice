import { Router, Response, Request } from "express";
import fileUpload from "../middleware/multerservice";
import {
  createAuthor,
  getAllAuthors,
  getBooksByAuthor,
  singleAuthor
} from "../controller/authorsController";
import {
  checkAuthorId,
  displayBooksOfAnAuthor
} from "../middleware/authorsMiddleware";

const authorRoute = Router();
authorRoute.get("", getAllAuthors);
authorRoute.post("", fileUpload, createAuthor);
authorRoute.put("", (req: Request, res: Response) => {
  res.send(req.body);
});
authorRoute.delete("/", (req: Request, res: Response) => {
  res.send({
    message: `${req.body.name} Deleted`,
    status: 200
  });
});

authorRoute.get("/:authorId", checkAuthorId, singleAuthor);

authorRoute.get("/:authorId/books", displayBooksOfAnAuthor, getBooksByAuthor);

export default authorRoute;
