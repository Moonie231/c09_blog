"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
});
exports.Blog = (0, mongoose_1.model)("Blog", blogSchema);
//# sourceMappingURL=blog.model.js.map