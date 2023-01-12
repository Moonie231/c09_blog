export declare class AdminController {
    static showHomePage(req: any, res: any): void;
    static showListUserPage(req: any, res: any): Promise<void>;
    static deleteUser(req: any, res: any): Promise<void>;
    static lockUser(req: any, res: any): Promise<void>;
    static searchUser(req: any, res: any): Promise<void>;
    static showListBlog(req: any, res: any): Promise<void>;
    static deleteBlog(req: any, res: any): Promise<void>;
    static searchBlog(req: any, res: any): Promise<void>;
    static addAdminPage(req: any, res: any): Promise<void>;
    static addAdmin(req: any, res: any): Promise<void>;
}
