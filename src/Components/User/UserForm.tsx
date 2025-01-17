import { useState } from "react";
import InputSolid from "../Inputs/InputSolid";
import ButtonForm from "../Inputs/ButtonForm";
import LocationInput from "../Inputs/GeolocationInput";

const UserForm: React.FC = () => {
  return (
    <>
      <h1>U S E R</h1>
      <InputSolid />
      <LocationInput/>
      <ButtonForm />
    </>
  );
};

export default UserForm;
