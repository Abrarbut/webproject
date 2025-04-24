import React, { useState } from "react";
import LoginImage from "../assets/login.webp"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from './../redux/slices/authSlices';
import { useDispatch } from "react-redux";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate()
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
        navigate("/")
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="flex h-screen">
            {/* Left Side - Login Form */}
            <div className="flex flex-col items-center justify-center w-full p-8 md:w-1/2 md:p-12">
                <form className="w-full max-w-md p-8 bg-white border rounded-lg shadow-sm" onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-6">
                        <h2 className="text-xl font-medium">Rabbit</h2>
                    </div>
                    <h2 className="mb-6 text-2xl font-bold text-center">Hey there! 👋</h2>
                    <p className="mb-6 text-center">Enter your username and password</p>

                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 mt-1 border rounded-md"
                            placeholder="Enter your email address "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 mt-1 border rounded-md"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="w-full p-2 text-white transition bg-black rounded-md hover:bg-gray-900">
                        Sign In
                    </button>
                    <p className="mt-6 text-sm text-center">Don't have an Account?
                        <Link to="/register" className="text-blue-500">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
            {/* Right Side - Image */}
            <div className="hidden w-1/2 bg-gray-100 md:block">
                <div className="flex flex-col items-center justify-center h-full">
                    <img
                        src={LoginImage}
                        alt="Login to Account"
                        className="object-cover w-full min-h-full"
                    />

                </div>

            </div>
        </div>
    );
};

export default Login;
