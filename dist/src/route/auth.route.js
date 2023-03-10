"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controller/auth.controller");
const express_1 = require("express");
const authRoutes = (0, express_1.Router)();
authRoutes.get("/login", auth_controller_1.AuthController.showFormLogin);
authRoutes.post("/login", auth_controller_1.AuthController.login);
authRoutes.get("/register", auth_controller_1.AuthController.showFormRegister);
authRoutes.post("/register", auth_controller_1.AuthController.register);
authRoutes.get('/change-password', auth_controller_1.AuthController.changePasswordPage);
authRoutes.post('/change-password', auth_controller_1.AuthController.changePassword);
authRoutes.get('/logout', auth_controller_1.AuthController.logout);
exports.default = authRoutes;
//# sourceMappingURL=auth.route.js.map