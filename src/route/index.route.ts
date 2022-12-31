
import authRoutes from "./auth.route";
import userRoutes from "./user.route";
import {checkAuth}  from "../midlleware/auth";
import { checkPermission } from "../midlleware/permission";

import adminRoutes from "./admin.route";

function route(app) {

    app.use("/auth", authRoutes);

    app.use(checkAuth);

    app.use("/user", userRoutes);

    app.use(checkPermission);

    app.use('/admin', adminRoutes);



}

export default route;