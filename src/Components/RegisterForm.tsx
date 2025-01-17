import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationInput from "./LocationInput";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: "",
    password: "",
    role: "",  
  });

  const options = [
    {role: 'user'},
    {role: 'admin'},
    {role: 'curier'}
  ]

  const Curier = [
    { freetime: 'time'},
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

        <div className="mb-4">
          <input
            type="type"
            placeholder="Full name"
            value={formData.fullname}
            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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

        <div className="mb-4">
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
        {formData.role === "curier" &&
          Curier.map((item) => (
            <>
              <h1 className="text-center">
                Input your maximum availability during the day
              </h1>
              <input
                type={item.freetime}
                className="flex self-center mb-4 justify-self-center"
              />
              <h1 className="text-center">Input suitable day to work weekly</h1>
              <input
                type="date"
                className="flex self-center justify-self-center "
              />
              <LocationInput />
            </>
          ))}

        <div className="mb-6">
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {options.map(({ role }) => (
              <option value={role}>{role}</option>
            ))}
          </select>
        </div>

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
