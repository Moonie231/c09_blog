import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    title: String,

    date: {
        type: Date,
        default: Date.now()
    },

    content: String,

    status: {
        type: String,
        default: "public",
        enum: ["public", "private"]
    },

    image: {
        type: String,
        default: null,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

export const Blog = model("Blog", blogSchema);