import React from 'react'
import InputSolid from '../Inputs/InputSolid'
import WorkingHoursForm from '../Inputs/WorkingHours'
import ButtonForm from '../Inputs/ButtonForm'
import VehicleInput from '../Inputs/VehicleInput'

const CourierForm:React.FC = () => {
  return (
<>
    <InputSolid/>
    <VehicleInput/>
    <WorkingHoursForm/>
    <ButtonForm/>
</>
)
}

export default CourierForm