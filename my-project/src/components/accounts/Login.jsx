import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "../../api/axios"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      // Save token in localStorage
      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("storage"));
      navigate("/"); // redirect to home/dashboard
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen px-4">
        <form onSubmit={handleLogin}>
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-medium text-center mb-6">Login —</h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex justify-between text-sm mb-4">
              <a href="#" className="text-gray-500 hover:underline">
                Forgot your password?
              </a>
              <a href="/register" className="text-gray-500 hover:underline">
                Create account
              </a>
            </div>

            <button type="submit" className="w-full bg-black text-white py-2">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login