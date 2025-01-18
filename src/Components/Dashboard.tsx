import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import CloudinaryImage from "./Inputs/image/CloudinaryImage";

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <h1>Welcome, {user.role}</h1>
      <p>Email: {user.email}</p>
      <CloudinaryImage />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
