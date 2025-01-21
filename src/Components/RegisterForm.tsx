import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ReduxMainToolkit/ReduxMainStore";
import { RegUserEventtarget, clearRegisterInput } from "../ReduxMainToolkit/ReduxMainSlice";
import { DBPost } from "../QueryMain/QueryMainRest";
import CourierForm from "./Courier/CourierForm";
import UserForm from "./User/UserForm";
import AdminForm from "./Admin/AdminFrom";
import FormImage from "./Inputs/image/formImage";

const Register: React.FC = () => {
  const user = useSelector(
    (state: RootState) => state.mainStore.RegisterInput.RegisteredUser
  );

  const location = useSelector(
    (state: RootState) => state.mainStore.RegisterInput.LatLanUser
  );

  const workDays = useSelector(
    (state: RootState) => state.mainStore.RegisterInput.CourierWorkingdays
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [{ role: "user" }, { role: "admin" }, { role: "courier" }];
  const [file, setFile] = useState<File | null>(null);
  React.useEffect(() => {
    if (!user.role) {
      dispatch(RegUserEventtarget({ role: "user" }));
    }
  }, [user.role, dispatch]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
  
    if (!file) {
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "merabi");
    formData.append("cloud_name", "djjye4dc1");
  
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/djjye4dc1/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
  
      const updatedUser = {
        ...user,
        profileImage: data.secure_url,
      };
  
      dispatch(RegUserEventtarget(updatedUser));

      const userData = [
        {
          fullname: user.firstname,
          lastname: user.lastname,
          pid: user.pid,
          email: user.email,
          password: user.password,
          role: user.role,
          profileImage: data.secure_url,
          ...(user.role === "courier"
            ? {
                userlocation: location,
                vehicletype: user.vehicletype,
                phonenum: user.phonenumber,
                workdays: workDays,
              }
            : {}),
        },
      ];
  
      try {
        const response = await DBPost(userData);
        console.log("Registration successful:", response);
        dispatch(clearRegisterInput());
        setFile(null);
        navigate("/");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };
  

  const renderForm = React.useMemo(() => {
    switch (user.role) {
      case "user":
        return <UserForm />;
      case "admin":
        return <AdminForm />;
      case "courier":
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

        <FormImage onFileChange={setFile} />

        <div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => {navigate("/")}}
            className="w-full py-3 mt-5 font-semibold text-white transition duration-200 bg-red-200 rounded-md hover:bg-red-400"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
