import { useDispatch, useSelector } from 'react-redux';
import { RegUserEventtarget } from '../../ReduxMainToolkit/ReduxMainSlice';
import { RootState } from '../../ReduxMainToolkit/ReduxMainStore';

const VehicleInput = () => {
  const typeOfTra = ["Car", "Motorcycle", "Bicycle"];
  const dispatch = useDispatch()
  const Vehicletype = useSelector(
    (state: RootState) =>
      state.mainStore.RegisterInput.RegisteredUser.vehicletype
  );
  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedVehicle(e.target.value);
  //   console.log(e.target.value);
  // };

  return (
    <div className="p-5 bg-gray-200">
      <label htmlFor="vehicle-input">Vehicle:</label>
      <select
        id="vehicle-options"
        value={Vehicletype}
        className="p-2 bg-gray-200"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(RegUserEventtarget({ vehicletype: e.target.value }))
        }
      >
        <option value="" disabled>
          Select a vehicle
        </option>
        {typeOfTra.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {Vehicletype && <p>Selected Vehicle: {Vehicletype}</p>}
    </div>
  );
};

export default VehicleInput;
