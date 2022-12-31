import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    title: String,

    dateCreated: Date,

    content: String,

    status: {
        type: String,
        default: "public",
        enum: ["public", "private"]},

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

export const Blog = model("Blog", blogSchema);