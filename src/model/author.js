import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    name: { type: String, required: true },
    biography: { type: String }
}, {versionKey: false});

const authors = mongoose.model("authors", authorSchema);

export { authors, authorSchema };