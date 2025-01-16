import React from 'react'
import InputSolid from '../InputSolid'
import Input from '../AdminInputSOLID'
import WorkingHoursForm from '../WorkingHours'
import ButtonForm from '../ButtonForm'

const CourierForm:React.FC = () => {
  return (
<>
    <InputSolid/>
    <Input
    label='Vehicle'
    onChange={(e) => console.log(e.target.value)}
    type='list'
    selectOptions={[
      { value: 'Car', label: 'Car' },
      { value: 'Motorcycle', label: 'Motorcycle' },
      { value: 'Bicycle', label: 'Bicycle' },
    ]}
    />
    <WorkingHoursForm/>
    <ButtonForm/>
</>
)
}

export default CourierForm