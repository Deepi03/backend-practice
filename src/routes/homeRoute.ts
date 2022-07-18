import { Router, Request, Response } from "express";

const homeRoute = Router();

homeRoute.get("", (req: Request, res: Response) => {
  res.send("Get route from homeRoute");
});
homeRoute.post("", (req: Request, res: Response) => {
  res.send("Post route from homeRoute");
});

export default homeRoute;
