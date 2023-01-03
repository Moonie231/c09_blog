import mongoose from "mongoose";
declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    status: "active" | "locked";
    role: "user" | "admin";
    avatar: string;
    blog: mongoose.Types.ObjectId[];
    address?: string;
    phone?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    password: string;
    status: "active" | "locked";
    role: "user" | "admin";
    avatar: string;
    blog: mongoose.Types.ObjectId[];
    address?: string;
    phone?: string;
}>>;
export { User };
