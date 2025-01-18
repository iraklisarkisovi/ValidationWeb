import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminForm from "./Admin/AdminFrom";
import UserForm from "./User/UserForm";
import CourierForm from "./Courier/CourierForm";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
  });

  const options = [
    { role: "user" },
    { role: "admin" },
    { role: "curier" },
  ];

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registering user:", formData);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-semibold text-center">Register</h1>

        <div className="mb-6">
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select Role</option>
            {options.map(({ role }) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        {formData.role === "admin" && <AdminForm/>}
        {formData.role === "user" && <UserForm />}
        {formData.role === "curier" && <CourierForm />}

        <div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
