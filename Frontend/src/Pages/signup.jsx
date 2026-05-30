import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../config/service.js";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            console.error("Please fill in all fields");
            return;
        }
        try {
            const createuser = await axiosInstance.post('/register', formData);
            if (createuser) {
                console.log(createuser.data);



            }
        } catch (error) {
            console.error("Error creating user:", error);
            console.log(error.response);
            console.log(error.response.data);

        }
        navigate('/login');

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 px-4">

            <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">
                        Create Account
                    </h1>

                    <p className="text-gray-300 mt-2">
                        Join us and start your journey today
                    </p>
                </div>

                <form className="space-y-5" onSubmit={(e) => {
                    handleSubmit(e)
                }}>

                    <div>
                        <label className="text-gray-300 text-sm">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter your email"
                            className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Create password"
                            className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <button
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold"
                    >
                        Sign Up
                    </button>

                </form>

                <p className="text-center text-gray-300 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Signup;