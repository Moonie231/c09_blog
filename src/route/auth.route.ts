import { AuthController } from "../controller/auth.controller";
import { Router } from 'express';
const authRoutes = Router();


authRoutes.get("/login", AuthController.showFormLogin);
authRoutes.post("/login", AuthController.login);

authRoutes.get("/register", AuthController.showFormRegister);
authRoutes.post("/register", AuthController.register);

authRoutes.get('/changepassword', AuthController.changePasswordPage);
authRoutes.post('/changepassword',AuthController.changePassword);

authRoutes.get('/logout', AuthController.logout);

export default authRoutes;