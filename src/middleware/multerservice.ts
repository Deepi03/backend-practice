import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    console.log("iniside multer storage filename", file.originalname);
    cb(null, file.originalname);
  },
  destination: (req, file, cb) => {
    console.log("iniside multer storage dest", __dirname);
    cb(null, path.join(__dirname, "../../public/images"));
  }
});

//reads from form input and store it in above storage
const fileUpload = multer({
  storage
}).single("avatar");

export default fileUpload;
