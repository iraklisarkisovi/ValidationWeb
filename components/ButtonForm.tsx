import { useState } from "react";

const ButtonForm: React.FC = () => {
  const [error, setError] = useState("");
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    pid: "",
    phoneNumber: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const onClick = () => {
    if (
      !formState.firstName ||
      !formState.lastName ||
      !formState.pid ||
      !formState.phoneNumber ||
      !formState.email ||
      !formState.password ||
      !formState.profileImage
    ) {
      setError("Please fill all the inputs");
    } else {
      setError("");
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    console.log(formState);
  };
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        style={{ padding: "10px 20px", marginTop: "10px" }}
      >
        Submit
      </button>

      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
    </div>
  );
};
export default ButtonForm;
