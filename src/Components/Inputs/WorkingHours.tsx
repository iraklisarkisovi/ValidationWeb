import { useState } from 'react';

const workingHours = Array.from({ length: 48 }, (_, index) => {
  const hours = String(Math.floor(index / 2)).padStart(2, '0');
  const minutes = index % 2 === 0 ? '00' : '30';
  return `${hours}:${minutes}`;
});

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const CourierForm = () => {
  interface WorkingDay {
    day: string;
    startHour: string;
    endHour: string;
  }
  
  const [workingDays, setWorkingDays] = useState<WorkingDay[]>([]);

  const handleDayChange = (index: number, field: string, value: string) => {
    const updatedDays = [...workingDays];
    (updatedDays[index] as any)[field] = value;
    setWorkingDays(updatedDays);
  };

  const addDay = () => {
    setWorkingDays([...workingDays, { day: '', startHour: '', endHour: '' }]);
  };

  const removeDay = (index: number) => {
    const updatedDays = workingDays.filter((_, i) => i !== index);
    setWorkingDays(updatedDays);
  };
  const blockButton = workingDays.length == 7  ;

  return (
    <div>
      <h3>Add working days:</h3>
      {workingDays.map((entry, index) => (
        <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <select
            value={entry.day}
            onChange={(e) => handleDayChange(index, 'day', e.target.value)}
          >
            <option value="" disabled>
              Select a day
            </option>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <select
            value={entry.startHour}
            onChange={(e) => handleDayChange(index, 'startHour', e.target.value)}
          >
            <option value="" disabled>
              Start Hour
            </option>
            {workingHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select
            value={entry.endHour}
            onChange={(e) => handleDayChange(index, 'endHour', e.target.value)}
          >
            <option value="" disabled>
              End Hour
            </option>
            {workingHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => removeDay(index)}>
            Remove
          </button>
        </div>
      ))}
    {workingDays.length < 5 && (
      <p style={{ color: 'red', fontSize: '12px' }}>You must add at least 5 working days</p>
    )}
    {workingDays.length === 7 && (
      <p style={{ color: 'red', fontSize: '12px' }}>You can only add 7 working days</p>
    )}
       <button
        type="button"
        onClick={addDay}
        disabled={blockButton}
        style={{ cursor: blockButton ? 'not-allowed' : 'pointer' }}
      >
        + Add Day
      </button>
    </div>
  );
};

export default CourierForm;
