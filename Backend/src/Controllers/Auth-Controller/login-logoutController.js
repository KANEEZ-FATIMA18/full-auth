import AuthModel from "../../Models/AuthSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const loginController = async (req, res) => {
    try {
        const { email, password ,username } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }
        const user = await AuthModel.findOne({ 
            $or:[
                { email },
                { username }
            ]
         });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: "JWT secret not configured" });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                username: user.username,
                role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        });

        return res.status(200).json({
            message: "Login successful",
            user,
            token,
        });

    }

    catch (error) {
        console.error("Login error:", error.message);
    }

}



const logoutController = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
    });
    res.status(200).json({ message: "Logout successful" });
}

export { loginController, logoutController };