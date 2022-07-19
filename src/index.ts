import mongoose from "mongoose";

import app from "./app";

/* mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1"
  )
  .then(() => {
    app.listen(app.get("port"), () =>
      console.log(`app is up and running in port ${app.get("port")}`)
    );
  })
  .catch(e => {
    console.log("mongodb connect error");
    process.exit(1);
  }); */
mongoose
  .connect(
    "mongodb+srv://deepirajsekar03:1234@cluster0.3cqlze3.mongodb.net/backend-practice?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(app.get("port"), () =>
      console.log(`app is up and running in port ${app.get("port")}`)
    );
  })
  .catch(e => {
    console.log("mongodb connect error");
    process.exit(1);
  });
