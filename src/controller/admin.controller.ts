import {User} from "../model/user.model";
import {Blog} from "../model/blog.model";

export class AdminController{
    static showHomePage(req, res) {
        res.render('admin/home')
    }

    static async showListUserPage (req,res) {
        let user = await User.find()
        res.render('admin/listUser', {user: user})
    }

    static async deleteUser (req,res) {
        let id = req.params.id
        await User.findOneAndDelete({_id: id})
        res.redirect('/admin/list-user')
    }

    static async searchUser (req,res) {
        let user = await User.find({
            name: {$regex: req.query.keyword
            }
        })
        res.status(200).json(user);
    }

    static async showListBlog (req,res) {
        let blog = await Blog.find()
        res.render('admin/listBlog', {blog: blog})
    }
}