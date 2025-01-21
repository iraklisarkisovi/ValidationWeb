import React from 'react'
import InputSolid from '../Inputs/InputSolid'
import VehicleInput from '../Inputs/VehicleInput'
import WorkingHours from '../Inputs/WorkingHours'


const CourierForm:React.FC = () => {
  return (
    <>
      <InputSolid />
      <VehicleInput />
      <WorkingHours />
    </>
  );
}

export default CourierForm