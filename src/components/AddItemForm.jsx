import React, { useState } from "react";
import "./AddItemForm.css";

const AddItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [hour, setHour] = useState("");
  const [dayMonth, setDayMonth] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() && hour.trim() && dayMonth.trim() && priority.trim()) {
      onAddItem(itemName, hour, dayMonth, priority);
      setItemName("");
      setHour("");
      setDayMonth("");
      setPriority("");
    } else if (
      itemName.length === 0 &&
      hour.length === 0 &&
      dayMonth.length === 0 &&
      priority.length === 0
    ) {
      onAddItem(
        `Task ${Math.floor(Math.random() * 100)}`,
        `${Math.floor(Math.random() * 12) + 1}:${Math.floor(
          Math.random() * 60
        )} ${Math.round(Math.random()) === 0 ? "AM" : "PM"}`,
        `${Math.floor(Math.random() * 30) + 1}/${
          Math.floor(Math.random() * 12) + 1
        }`,
        Math.round(Math.random()) === 0 ? "Low" : "High"
      );
    }
  };

  return (
    <form className="enter" onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="To Do"
      />
      <input
        type="text"
        value={hour}
        onChange={(e) => setHour(e.target.value)}
        placeholder="Enter hour"
      />
      <input
        type="text"
        value={dayMonth}
        onChange={(e) => setDayMonth(e.target.value)}
        placeholder="Enter day/month"
      />
      <input
        type="text"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        placeholder="High or Low"
      />
      <button type="submit-button">Add ToDo</button>
    </form>
  );
};

export default AddItemForm;
