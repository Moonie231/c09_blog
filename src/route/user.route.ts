import { UserController } from "../controller/user.controller";
import { Router } from 'express';
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '../../../../public/image');
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

const userRoutes = Router()

userRoutes.get('/home', UserController.getHome)
userRoutes.get('/add-blog', UserController.addBlogPage)
userRoutes.post('/add-blog',upload.single('image'), UserController.addBlog)
userRoutes.get('/blog/:id', UserController.getBlog)
userRoutes.get('/my-blog', UserController.myBlog)
userRoutes.get('/search-blog', UserController.searchBlog1)
userRoutes.get('/delete-blog/:id', UserController.deleteBlog)
userRoutes.get('/update-blog/:id', UserController.updateBlogPage)
userRoutes.post('/update-blog/:id', upload.single('image'), UserController.updateBlog)

userRoutes.get('/info', UserController.getInfo)
userRoutes.get('/edit-user/:id', UserController.editUserPage)
userRoutes.post('/edit-user/:id', upload.single('avatar'), UserController.editUser)

export default userRoutes