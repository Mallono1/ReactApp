import React, { useState } from "react";

const UpdateItemForm = ({ item, onUpdateItem }) => {
  const [itemName, setItemName] = useState(item.name);
  const [hour, setHour] = useState(item.hour);
  const [dayMonth, setDayMonth] = useState(item.dayMonth);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateItem(item.id, itemName, hour, dayMonth, price);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateItemForm;
