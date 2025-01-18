import React from 'react'
import InputSolid from '../Inputs/InputSolid'
import VehicleInput from '../Inputs/VehicleInput'
import ButtonForm from '../Inputs/ButtonForm'
import WorkingHours from '../Inputs/WorkingHours'


const CourierForm:React.FC = () => {
  return (
<>
    <InputSolid/>
    <VehicleInput/>
    <WorkingHours/>
    <ButtonForm/>
</>
)
}

export default CourierForm