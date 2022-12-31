import { UserController } from "../controller/user.controller";
import { Router } from 'express';
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '../../../../public/image/upload');
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

export default userRoutes