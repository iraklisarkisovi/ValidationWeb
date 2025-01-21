import React from "react";
import Input from "./AdminInputSOLID";
import { useDispatch, useSelector } from "react-redux";
import { RegUserEventtarget } from "../../ReduxMainToolkit/ReduxMainSlice";
import { RootState } from "../../ReduxMainToolkit/ReduxMainStore";

const InputSolid: React.FC = () => {
  const dispatch = useDispatch();
  const initial = useSelector(
    (state: RootState) => state.mainStore.RegisterInput.RegisteredUser
  );

  
  const isInvalidName = (name: string) =>
    /^\d+$/.test(name) || name.length === 0;
  const isInvalidPID = (pid: string) => pid && !/^\d+$/.test(pid);
  const isInvalidPhone = (phone: string) => phone && !/^\d+$/.test(phone);
  const isInvalidEmail = (email: string) =>
    !email.includes("@") && email.length > 0;
  const isWeakPassword = (password: string) =>
    password.length < 8 && password.length > 0;

  return (
    <form
      className={`p-4 space-y-4 bg-gray-100 ${initial.role === "courier" ? "rounded-t-md": "rounded-md" }`}
    >
      <Input
        label="First Name"
        type="text"
        value={initial.firstname}
        onChange={(e) =>
          dispatch(RegUserEventtarget({ firstname: e.target.value }))
        }
      />
      {isInvalidName(initial.firstname) && (
        <p className="text-xs text-red-500">Invalid first name</p>
      )}

      <Input
        label="Last Name"
        type="text"
        value={initial.lastname}
        onChange={(e) =>
          dispatch(RegUserEventtarget({ lastname: e.target.value }))
        }
      />
      {isInvalidName(initial.lastname) && (
        <p className="text-xs text-red-500">Invalid last name</p>
      )}

      <Input
        label="PID"
        type="text"
        value={initial.pid}
        onChange={(e) => dispatch(RegUserEventtarget({ pid: e.target.value }))}
      />
      {isInvalidPID(initial.pid) && (
        <p className="text-xs text-red-500">Invalid PID</p>
      )}

      <Input
        label="Phone Number"
        type="text"
        value={initial.phonenumber}
        onChange={(e) =>
          dispatch(RegUserEventtarget({ phonenumber: e.target.value }))
        }
      />
      {isInvalidPhone(initial.phonenumber) && (
        <p className="text-xs text-red-500">Invalid phone number</p>
      )}

      <Input
        label="Email"
        type="email"
        value={initial.email}
        onChange={(e) =>
          dispatch(RegUserEventtarget({ email: e.target.value }))
        }
      />
      {isInvalidEmail(initial.email) && (
        <p className="text-xs text-red-500">Invalid email</p>
      )}

      <Input
        label="Password"
        type="password"
        value={initial.password}
        onChange={(e) =>
          dispatch(RegUserEventtarget({ password: e.target.value }))
        }
      />
      {isWeakPassword(initial.password) && (
        <p className="text-xs text-red-500">
          Password must be at least 8 characters
        </p>
      )}

    </form>
  );
};

export default InputSolid;
