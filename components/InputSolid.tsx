import { useState } from "react";
import Input from "./AdminInputSOLID";

const InputSolid = () => {
    const [formState, setFormState] = useState({
      firstName: "",
      lastName: "",
      pid: "",
      phoneNumber: "",
      email: "",
      password: "",
      profileImage: null, 
    });
    const handleFileChange = (e:any) => {
      setFormState({ ...formState, profileImage: e.target.files[0] });
    };
    const handleSubmit = () => {
        console.log(formState)
    }
    return (
      <form onSubmit={handleSubmit}>
        <Input
          label="First Name"
          type="text"
          value={formState.firstName}
          onChange={(e) =>
            setFormState({ ...formState, firstName: e.target.value })
          }
        />
        {(!formState.firstName || /^\d+$/.test(formState.firstName)) && formState.firstName.length > 0 && (
  <p style={{ color: "red", fontSize: "12px" }}>Invalid first name</p>)}
        <Input
          label="Last Name"
          type="text"
          value={formState.lastName}
          onChange={(e) =>
            setFormState({ ...formState, lastName: e.target.value })
          }
        />
         {(!formState.lastName || /^\d+$/.test(formState.lastName)) && formState.lastName.length > 0 && (
  <p style={{ color: "red", fontSize: "12px" }}>Invalid last name</p>)}
        <Input
          label="PID"
          type="text"
          value={formState.pid}
          onChange={(e) => setFormState({ ...formState, pid: e.target.value })}
        />
     {formState.pid && !/^\d+$/.test(formState.pid) && (
        <p style={{ color: "red", fontSize: "12px" }}>Invalid PID</p>
      )}

        <Input
          label="Phone Number"
          type="text"
          value={formState.phoneNumber}
          onChange={(e) =>
            setFormState({ ...formState, phoneNumber: e.target.value })
          }
        />
           {formState.phoneNumber && !/^\d+$/.test(formState.phoneNumber) && (
        <p style={{ color: "red", fontSize: "12px" }}>Invalid phone number</p>
      )}
        <Input
          label="Email"
          type="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        />
        {!formState.email.includes('@') && formState.email.length > 0 &&
            <p style={{ color: "red", fontSize: "12px" }}>Invalid email</p>
        }
        <Input
          label="Password"
          type="password"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
        {formState.password.length < 8 && formState.password.length > 0 && (
          <p style={{ color: "red", fontSize: "12px" }}>Password must be at least 8 characters</p>)}
        <Input
          label="Profile Image"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </form>
    );
  };
  export default InputSolid;