import { Router, Request, Response } from "express";
import path from "path";

const authorImageRoute = Router();
authorImageRoute.get("/:imageName", (req: Request, res: Response) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(__dirname, `../../public/images/${imageName}`));
});

export default authorImageRoute;
