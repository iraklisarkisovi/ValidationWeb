import React, { useState } from "react";

const WorkingHoursForm: React.FC = () => {
  const [workingHours, setWorkingHours] = useState({
    day: "",
    startHours: "",
    endHours: "",
  });

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const generateTimeSlots = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        const formattedTime = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
        times.push(formattedTime);
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setWorkingHours((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Select Working Hours</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Day of the Week:
          <select name="day" value={workingHours.day} onChange={handleChange}>
            <option value="" disabled>
              Select a day
            </option>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Start Time:
          <select name="startHours" value={workingHours.startHours} onChange={handleChange}>
            <option value="" disabled>
              Select start time
            </option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          End Time:
          <select name="endHours" value={workingHours.endHours} onChange={handleChange}>
            <option value="" disabled>
              Select end time
            </option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default WorkingHoursForm;
