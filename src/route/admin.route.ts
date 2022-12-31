import { AdminController } from "../controller/admin.controller";
import { Router } from 'express';

const adminRoutes = Router();

adminRoutes.get('/home', AdminController.showHomePage)

adminRoutes.get('/list-user', AdminController.showListUserPage)
adminRoutes.get('/delete-user/:id', AdminController.deleteUser)
adminRoutes.get('/search-user', AdminController.searchUser)

adminRoutes.get('/list-blog', AdminController.showListBlog)

export default adminRoutes;