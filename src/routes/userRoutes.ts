import { Router, Request, Response } from "express";

const userRoute = Router();

userRoute.get("", (req: Request, res: Response) => {
  res.send({
    message: "Get route from User Route",
    status: 200,
  });
});
userRoute.post("", (req: Request, res: Response) => {
  res.send({
    message: "Post route from User Route",
    status: 200,
  });
});
userRoute.get("/contacts", (req: Request, res: Response) => {
  res.send({
    message: "Post route from user/contacts Route",
    status: 200,
  });
});

export default userRoute;
