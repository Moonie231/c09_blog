"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name can't be blank"]
    },
    email: {
        type: String,
        required: [true, "Email can't be blank"]
    },
    password: {
        type: String,
        required: [true, "Password can't be blank"]
    },
    address: String,
    phone: String,
    status: {
        type: String,
        default: 'active',
        enum: ['active', "locked"]
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    avatar: {
        type: String,
        default: "/image/default.jpg"
    },
    blog: [
        {
            type: Schema.Types.ObjectId,
            ref: "Blog"
        }
    ],
});
const User = model('User', userSchema);
exports.User = User;
//# sourceMappingURL=user.model.js.map