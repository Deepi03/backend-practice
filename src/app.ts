import express, { Request, Response } from "express";
import path, { dirname } from "path";
import authorImageRoute from "./routes/authorImageRoute";
import authorRoute from "./routes/authorRoutes";
import homeRoute from "./routes/homeRoute";
import userRoute from "./routes/userRoutes";

const app = express();

app.set("port", 8080);

app.use(express.json()); // receives and read req json object
app.use(express.text()); //  receives and read req text object
app.use(express.urlencoded());
//set view fro static template
app.use(express.static(path.join(__dirname, "../public")));

// set view for dynamic template
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "jade");

const user = {
  userName: "Milo",
  age: "10 months"
};
//set up the response method on the route '/'
app.use("/", homeRoute);
app.use("/users", userRoute);
app.use("/authors", authorRoute);
app.use(
  "/document",
  express.static(path.join(__dirname, "../public/html/index.html"))
);

//sending response to html
app.get("/about", (req: Request, res: Response) => {
  res.locals.user = user;
  /*
  res.locals = {
    ...res.locals,
    user,
    data,
    etc..,
  } */
  res.render("about", user);
});

app.use("/authorImages", authorImageRoute);

export default app;
