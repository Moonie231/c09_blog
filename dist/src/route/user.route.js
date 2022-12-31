"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controller/user.controller");
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '../../../../public/image/upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const userRoutes = (0, express_1.Router)();
userRoutes.get('/home', user_controller_1.UserController.getHome);
userRoutes.get('/add-blog', user_controller_1.UserController.addBlogPage);
userRoutes.post('/add-blog', upload.single('image'), user_controller_1.UserController.addBlog);
userRoutes.get('/blog/:id', user_controller_1.UserController.getBlog);
exports.default = userRoutes;
//# sourceMappingURL=user.route.js.map