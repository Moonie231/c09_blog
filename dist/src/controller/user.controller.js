"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const blog_model_1 = require("../model/blog.model");
const user_model_1 = require("../model/user.model");
class UserController {
    static async getHome(req, res) {
        let user = await user_model_1.User.findById({ _id: req.decoded.user_id });
        let blog = await blog_model_1.Blog.find({ status: "public" });
        res.render('user/home', { blog: blog, user: user });
    }
    static async addBlogPage(req, res) {
        let user = await user_model_1.User.findById({ _id: req.decoded.user_id });
        res.render('user/addBlog', { user: user });
    }
    static async addBlog(req, res) {
        let user = await user_model_1.User.findById({ _id: req.decoded.user_id });
        let blog = new blog_model_1.Blog({
            title: req.body.title,
            content: req.body.content,
            image: req.file.originalname,
            status: req.body.status,
            date: new Date(),
            user: user._id
        });
        await blog.save();
        res.redirect("/user/home");
    }
    static async getBlog(req, res) {
        let user = await user_model_1.User.findById({ _id: req.decoded.user_id });
        let id = req.params.id;
        let blog = await blog_model_1.Blog.findOne({ _id: id });
        res.render('user/blog', { blog: blog, user: user });
    }
    static async getInfo(req, res) {
        let user = await user_model_1.User.findById({ _id: req.decoded.user_id });
        res.render('user/info', { user: user });
    }
    static async editUserPage(req, res) {
        let user = await user_model_1.User.findById({ _id: req.decoded.user_id });
        res.render('user/editUser', { user: user });
    }
    static async editUser(req, res) {
        let id = req.params.id;
        await user_model_1.User.findOneAndUpdate({ _id: id }, {
            $set: {
                name: req.body.name,
                address: req.body.address,
                phone: req.body.phone,
                avatar: req.file.originalname
            }
        });
        res.redirect('/user/info');
    }
    static async myBlog(req, res) {
        let user = await user_model_1.User.findById({ _id: req.decoded.user_id });
        let blog = await blog_model_1.Blog.find({ user: req.decoded.user_id });
        res.render('user/myBlog', { user: user, blog: blog });
    }
    static async searchBlog1(req, res) {
        let blog = await blog_model_1.Blog.find({
            title: { $regex: req.query.keyword },
            user: req.decoded.user_id
        });
        res.status(200).json(blog);
    }
    static async deleteBlog(req, res) {
        try {
            let id = req.params.id;
            await blog_model_1.Blog.findOneAndDelete({ _id: id });
            res.redirect('/user/my-blog');
        }
        catch (e) {
            console.log(e.message);
        }
    }
    static async updateBlogPage(req, res) {
        let id = req.params.id;
        let user = await user_model_1.User.findById({ _id: req.decoded.user_id });
        let blog = await blog_model_1.Blog.findOne({ _id: id });
        res.render('user/updateBlog', { user: user, blog: blog });
    }
    static async updateBlog(req, res) {
        try {
            let id = req.params.id;
            console.log(req.body.image);
            await blog_model_1.Blog.findOneAndUpdate({ _id: id }, {
                $set: {
                    title: req.body.title,
                    content: req.body.content,
                    image: req.file.originalname,
                    status: req.body.status,
                }
            });
            res.redirect('/user/my-blog');
        }
        catch (e) {
            console.log(e.message);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map