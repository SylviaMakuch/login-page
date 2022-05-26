import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../models/user";

export const signup = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body

    try {
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "This user already exists!" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModel.create({ email: email_toLowerCase(), password: hashedPassword, confirmPassword: hashedPassword, name });

        const token = jwt.sign({ email }, process.env.TOKEN_KEY, {
            expiresIn: "2h",
        })
        // save user token
        user.token = token;
        // return new user
        res.status(201).json(user);

    }
    catch (error) {
        res.status(500).json({ message: " Oops! Something went wrong!" })
    }
}