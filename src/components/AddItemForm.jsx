import React, { useState } from "react";
import "./AddItemForm.css";

const AddItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [hour, setHour] = useState("");
  const [dayMonth, setDayMonth] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() && hour.trim() && dayMonth.trim() && price.trim()) {
      onAddItem(itemName, hour, dayMonth, price);
      setItemName("");
      setHour("");
      setDayMonth("");
      setPrice("");
    }
  };

  return (
    <form className="enter" onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
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
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
      />
      <button type="submit-button">Add ToDo</button>
    </form>
  );
};

export default AddItemForm;
