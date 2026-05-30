import AuthModel from "../Models/AuthSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();



const authCheck=async(req, res , next)=>{
    try {
        
        const usertoken= req.cookies.token;

        if (!usertoken) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(usertoken, process.env.JWT_SECRET);

        console.log("decoded user token =================>",decoded);
        const user = await AuthModel.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        req.user = user;

        next();
        
    } catch (error) {
        console.error("Auth error:", error.message);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}


export {authCheck};