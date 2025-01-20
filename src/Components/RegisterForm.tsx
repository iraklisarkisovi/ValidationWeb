import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ReduxMainToolkit/ReduxMainStore";
import { RegUserEventtarget } from "../ReduxMainToolkit/ReduxMainSlice";
import { DBPost } from "../QueryMain/QueryMainRest";
import CourierForm from "./Courier/CourierForm";
import UserForm from "./User/UserForm";
import AdminForm from "./Admin/AdminFrom";

const Register: React.FC = () => {
  const user = useSelector(
    (state: RootState) => state.mainStore.RegisterInput.RegisteredUser
  );
  const location = useSelector(
    (state: RootState) => state.mainStore.RegisterInput.LatLanUser
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [{ role: "user" }, { role: "admin" }, { role: "curier" }];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registering user:", user);

    const userData = [
      {
        fullname: user.firstname,
        lastname: user.lastname,
        pid: user.pid,
        email: user.email,
        password: user.password,
        role: user.role,
        profileImage: user.profileImage,
        ...(user.role === "curier" ? { userlocation: location } : {}),
      },
    ];

    try {
      const response = await DBPost(userData);
      console.log("Registration successful:", response);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const renderForm = React.useMemo(() => {
    switch (user.role) {
      case "user":
        return <UserForm />;
      case "admin":
        return <AdminForm />;
      case "curier":
        return <CourierForm />;
      default:
        return null;
    }
  }, [user.role]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-semibold text-center">Register</h1>

        <div className="mb-6">
          <select
            value={user.role}
            onChange={(e) =>
              dispatch(RegUserEventtarget({ role: e.target.value }))
            }
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {options.map(({ role }) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {renderForm}

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
