import { useState } from 'react';

const VehicleInput = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const typeOfTra = ["Car", "Motorcycle", "Bicycle"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVehicle(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <label htmlFor="vehicle-input">Vehicle:</label>
      <select id="vehicle-options" value={selectedVehicle} onChange={handleChange}>
        <option value="" disabled>
          Select a vehicle
        </option>
        {typeOfTra.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {selectedVehicle && <p>Selected Vehicle: {selectedVehicle}</p>}
    </div>
  );
};

export default VehicleInput;
