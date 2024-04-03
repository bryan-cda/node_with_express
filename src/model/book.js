import mongoose from "mongoose";
import { authorSchema } from "./author.js";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true},
    release_date: { type: mongoose.Schema.Types.Date, required: true},
    publishing_company: { type: String },
    sumary: {type: String},
    author: authorSchema
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;