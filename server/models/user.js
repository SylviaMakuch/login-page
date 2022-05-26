import mongoose from "mongoose";

const userModel = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    token: { type: String },
    //   id: { type: String },
});

export default mongoose.model("User", userModel);