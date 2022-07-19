import { Router, Request, Response } from "express";
import path from "path";
import imageController from "../controller/imageController";

const authorImageRoute = Router();
authorImageRoute.get("/:imageId", imageController.getSingleImage);

export default authorImageRoute;
