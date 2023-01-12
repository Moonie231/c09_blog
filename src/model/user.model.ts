import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name can't be blank"]
    },

    email: {
        type: String,
        required: [true, "Email can't be blank"]
    },

    password: {
        type: String,
        required: [true, "Password can't be blank"]
    },

    address: String,

    phone: String,

    status: {
        type: String,
        default: 'active',
        enum: ['active', "locked"]
    },

    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },

    avatar: {
        type: String,
        default: "/image/default.jpg"
    },

    blog: [
        {
            type: Schema.Types.ObjectId,
            ref: "Blog"
        }
    ],

})


const User = model('User', userSchema);


export { User };