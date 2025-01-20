import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { DBGetUsers } from "../QueryMain/QueryMainRest";
 

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const users = await DBGetUsers(); 
      const matchedUser = users.find(
        (user: any) =>
          user.email === formData.email && user.password === formData.password
      );

      if (matchedUser) {
        login({ email: matchedUser.email, role: matchedUser.role });
        navigate("/dashboard"); 
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-semibold text-center">Login</h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </div>
        <Link to="/register">
          <h1 className="mt-3 text-center">Register</h1>
        </Link>
      </form>
    </div>
  );
};

export default Login;
