import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signupController } from "../Controllers/Auth-Controller/signupController.js";
import { loginController, logoutController } from "../Controllers/Auth-Controller/login-logoutController.js";



const authrouter = express.Router()
 

authrouter.post('/register', signupController);

authrouter.post('/login', loginController);
authrouter.post('/logout', logoutController);

export {authrouter};