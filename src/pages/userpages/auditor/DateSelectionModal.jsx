import React, { useState } from "react";

const DateSelectionModal = ({ onClose, onSave }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = event => {
    setSelectedDate(event.target.value);
  };

  const handleSave = () => {
    onSave(selectedDate);
    onClose();
  };

  return (
    <div>
      <h3>Select Preferred Date</h3>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default DateSelectionModal;
