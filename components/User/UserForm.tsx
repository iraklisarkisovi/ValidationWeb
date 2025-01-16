import { useState } from "react";
import InputSolid from "../InputSolid";
import ButtonForm from "../ButtonForm";

const UserForm: React.FC = () => {
  const [formState2, setFormState2] = useState({
    address: { lng: "", lat: "" },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState2((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  };

  return (
    <>
      <h1>U S E R</h1>
      <InputSolid />
      <div>
        <label>Address (Enter coordinates - lng, lat):</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            name="lng"
            placeholder="Longitude"
            value={formState2.address.lng}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lat"
            placeholder="Latitude"
            value={formState2.address.lat}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <ButtonForm />
    </>
  );
};

export default UserForm;
