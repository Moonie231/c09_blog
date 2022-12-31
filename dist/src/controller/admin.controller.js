"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const user_model_1 = require("../model/user.model");
const blog_model_1 = require("../model/blog.model");
class AdminController {
    static showHomePage(req, res) {
        res.render('admin/home');
    }
    static async showListUserPage(req, res) {
        let user = await user_model_1.User.find();
        res.render('admin/listUser', { user: user });
    }
    static async deleteUser(req, res) {
        let id = req.params.id;
        await user_model_1.User.findOneAndDelete({ _id: id });
        res.redirect('/admin/list-user');
    }
    static async searchUser(req, res) {
        let user = await user_model_1.User.find({
            name: { $regex: req.query.keyword
            }
        });
        res.status(200).json(user);
    }
    static async showListBlog(req, res) {
        let blog = await blog_model_1.Blog.find();
        res.render('admin/listBlog', { blog: blog });
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map