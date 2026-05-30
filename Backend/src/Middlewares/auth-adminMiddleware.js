import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import AuthModel from '../Models/AuthSchema.js';


dotenv.config();

const authAdminMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        const user = await AuthModel.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        if (user.role !== "admin") {
            return res.status(403).json({ message: "Forbidden: Admin access required" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Admin auth error:", error.message);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

export default authAdminMiddleware;