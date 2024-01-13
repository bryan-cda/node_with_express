import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    name: { type: String, required: true },
    biography: { type: String }
}, {versionKey: false});

const author = mongoose.model("author", authorSchema);

export { author, authorSchema };