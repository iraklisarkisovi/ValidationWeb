import React from 'react'
import InputSolid from '../Inputs/InputSolid'
import VehicleInput from '../Inputs/VehicleInput'
import WorkingHours from '../Inputs/WorkingHours'
import LocationInput from '../LocationInput'


const CourierForm:React.FC = () => {
  return (
    <>
      <div className="p-5 bg-gray-200 rounded-lg rounded-b-2x">
        <InputSolid />
        <VehicleInput />
        <LocationInput />
      </div>
      <WorkingHours />
    </>
  );
}

export default CourierForm