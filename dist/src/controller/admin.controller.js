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
    static async lockUser(req, res) {
        let id = req.params.id;
        let user = await user_model_1.User.findOne({ _id: id });
        if (user.status === 'active') {
            await user_model_1.User.updateOne({ _id: id }, { $set: { status: 'locked' }
            });
            res.redirect('/admin/list-user');
        }
        else {
            await user_model_1.User.updateOne({ _id: id }, { $set: { status: 'active' }
            });
            res.redirect('/admin/list-user');
        }
    }
    static async searchUser(req, res) {
        let user = await user_model_1.User.find({
            name: { $regex: req.query.keyword }
        });
        res.status(200).json(user);
    }
    static async showListBlog(req, res) {
        let blog = await blog_model_1.Blog.find().populate('user');
        res.render('admin/listBlog', { blog: blog });
    }
    static async deleteBlog(req, res) {
        let id = req.params.id;
        await blog_model_1.Blog.findOneAndDelete({ _id: id });
        res.redirect('/admin/list-blog');
    }
    static async searchBlog(req, res) {
        let blog = await blog_model_1.Blog.find({
            title: { $regex: req.query.keyword }
        }).populate('user');
        res.status(200).json(blog);
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map