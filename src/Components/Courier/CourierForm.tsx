import React from 'react'
import InputSolid from '../Inputs/InputSolid'
import VehicleInput from '../Inputs/VehicleInput'
import ButtonForm from '../Inputs/ButtonForm'
import WorkingHours from '../Inputs/WorkingHours'
import LocationInput from '../LocationInput'


const CourierForm:React.FC = () => {
  return (
    <>
      <InputSolid />
      <VehicleInput />
      <WorkingHours />
      <LocationInput />
      <ButtonForm />
    </>
  );
}

export default CourierForm