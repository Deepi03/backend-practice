import mongoose, { Document, Schema } from "mongoose";

export interface AuthorDocument extends Document {
  fullname: string;
  avatar: string;
}

const authorSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
});

// create Authors collection in mongodb
const Author = mongoose.model<AuthorDocument>("Author", authorSchema);
export default Author;
