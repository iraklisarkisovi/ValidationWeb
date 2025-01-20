import InputSolid from "../Inputs/InputSolid";
import ButtonForm from "../Inputs/ButtonForm";
import LocationInput from "../LocationInput";
 

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
