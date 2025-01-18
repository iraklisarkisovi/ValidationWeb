import { useNavigate } from "react-router-dom";
import LocationInput from "./LocationInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ReduxMainToolkit/ReduxMainStore";
import { RegUserEventtarget } from "../ReduxMainToolkit/ReduxMainSlice";
import { DBPost } from "../QueryMain/QueryMainRest";
import FormImage from "./Inputs/image/formImage";

const Register = () => {
  const user = useSelector(
    (state: RootState) => state.mainSore.RegisterInput.RegisteredUser
  );
  const location = useSelector(
    (state: RootState) => state.mainSore.RegisterInput.LatLanUser
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [{ role: "user" }, { role: "admin" }, { role: "curier" }];

  const curierFields = [{ freetime: "time" }];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registering user:", user);

    const userData = [
      {
        fullname: user.fullname,
        email: user.email,
        password: user.password,
        role: user.role,
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

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-semibold text-center">Register</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Full name"
            value={user.fullname}
            onChange={(e) =>
              dispatch(RegUserEventtarget({ fullname: e.target.value }))
            }
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) =>
              dispatch(RegUserEventtarget({ email: e.target.value }))
            }
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) =>
              dispatch(RegUserEventtarget({ password: e.target.value }))
            }
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {user.role === "curier" &&
          curierFields.map((item) => (
            <div key={item.freetime}>
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
                className="flex self-center justify-self-center"
              />
              <FormImage />
              <LocationInput />
            </div>
          ))}

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
