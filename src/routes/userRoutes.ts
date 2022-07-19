import { Router, Request, Response, NextFunction } from "express";

const userRoute = Router();

userRoute.get(
  "",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("I m a middleware");
    next();
  },
  (req: Request, res: Response) => {
    res.send({
      message: "Get route from User Route",
      status: 200,
    });
  }
);
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
