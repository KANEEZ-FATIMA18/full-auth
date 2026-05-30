import AuthModel from "../../Models/AuthSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const signupController = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        console.log(req.body);

        if (!username || !email || !password) {
            return res
                .status(400)
                .json({ message: "Please provide username, email, and password" });
        }

        const existingUser = await AuthModel.findOne({
            $or:[
                { email },
                { username }
            ]
        });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hash = await bcrypt.hash(password, 12);

        const createUser = await AuthModel.create({
            username,
            email,
            password: hash,
            role,
        });

        const token = jwt.sign(
            {
                id: createUser._id,
                email: createUser.email,
                username: createUser.username,
                role: createUser.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }, function (err, token) {

                if (err) {
                    return res.status(500).json({ message: "Error generating token" });
                }
                else {
                    res.cookie("token", token, {
                        httpOnly: true,
                        secure: true,
                        sameSite: "strict",
                    });


                }

                res.status(201).json({
                    message: "User registered successfully",
                    user: createUser,
                    token,
                });
            }
        );




    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { signupController };
