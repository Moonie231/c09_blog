"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_controller_1 = require("../controller/admin.controller");
const express_1 = require("express");
const adminRoutes = (0, express_1.Router)();
adminRoutes.get('/home', admin_controller_1.AdminController.showHomePage);
adminRoutes.get('/list-user', admin_controller_1.AdminController.showListUserPage);
adminRoutes.get('/delete-user/:id', admin_controller_1.AdminController.deleteUser);
adminRoutes.get('/search-user', admin_controller_1.AdminController.searchUser);
adminRoutes.post('/list-blog', admin_controller_1.AdminController.showListBlog);
exports.default = adminRoutes;
//# sourceMappingURL=admin.route.js.map