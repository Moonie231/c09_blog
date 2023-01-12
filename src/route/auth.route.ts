import { AuthController } from "../controller/auth.controller";
import { Router } from 'express';
const authRoutes = Router();


authRoutes.get("/login", AuthController.showFormLogin);
authRoutes.post("/login", AuthController.login);

authRoutes.get("/register", AuthController.showFormRegister);
authRoutes.post("/register", AuthController.register);

authRoutes.get('/change-password', AuthController.changePasswordPage);
authRoutes.post('/change-password',AuthController.changePassword);

authRoutes.get('/logout', AuthController.logout);

export default authRoutes;