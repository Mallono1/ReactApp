import React from "react";

const ListItem = ({ item, onDelete, onToggle }) => {
  return (
    <li>
      {item.name} - 
      <span onClick={() => onToggle(item.id)} style={{ cursor: "pointer" }}>
        {item.isCompleted ? "✅" : "❌"}
      </span>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};

export default ListItem;