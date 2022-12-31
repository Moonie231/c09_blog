import { Blog } from "../model/blog.model";

export class UserController{
    static async getHome(req,res){
        let blog = await Blog.find({status: "public"})
        res.render('user/home', {blog: blog});
    }

    static addBlogPage(req,res){
        res.render('user/addBlog')
    }

    static async addBlog(req,res){
        let blog = new Blog({
            title : req.body.title,
            content : req.body.content,
            image : req.file.originalname,
            status : req.body.status,
            date: new Date()
        });
        await blog.save();
        res.redirect("/user/home")
    }

    static async getBlog(req,res){
        let id = req.params.id
        console.log(id)
        let blog = await Blog.findOne({_id: id})
        res.render('user/blog', {blog: blog});
    }
}