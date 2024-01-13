import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true},
    author: { type: String, required: true},
    release_date: { type: mongoose.Schema.Types.Date, required: true},
    sumary: {type: String}
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;