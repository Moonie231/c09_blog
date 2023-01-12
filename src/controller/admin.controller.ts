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

    static async lockUser (req,res) {
        let id = req.params.id
        let user = await User.findOne({_id: id})
        if(user.status === 'active'){
            await User.updateOne({_id: id},
                { $set:
                        {status: 'locked'}
                })
            res.redirect('/admin/list-user')
        }else {
            await User.updateOne({_id: id},
                { $set:
                        {status: 'active'}
                })
            res.redirect('/admin/list-user')
        }
    }

    static async searchUser (req,res) {
        let user = await User.find({
            name: {$regex: req.query.keyword}
        })
        res.status(200).json(user);
    }

    static async showListBlog (req,res) {
        let blog = await Blog.find().populate('user')

        res.render('admin/listBlog', {blog: blog})
    }

    static async deleteBlog (req,res) {
        let id = req.params.id
        await Blog.findOneAndDelete({_id: id})
        res.redirect('/admin/list-blog')
    }

    static async searchBlog (req,res) {
        let blog = await Blog.find({
            title: {$regex: req.query.keyword}
        }).populate('user')
        res.status(200).json(blog);
    }
}