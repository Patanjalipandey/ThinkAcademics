import React, { useState } from "react";
import axios from "../../api/axios"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/register", formData);

            // Store token if you want auto-login (optional)
            localStorage.setItem("token", res.data.token);

            alert("Registered successfully!");
            navigate("/"); // redirect to homepage or login
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Registration failed");
        }
    };
    return (
        <div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">Sign Up —</h1>

                    <div className="mt-8 bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit} className="mb-0 space-y-6">
                            <div>
                                <h2 className="text-lg font-medium text-gray-900 mb-1">Name</h2>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        required
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium text-gray-900 mb-1">Email</h2>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium text-gray-900 mb-1">Password</h2>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                                        Forgot your password?
                                    </a>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                                        Login Here
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup