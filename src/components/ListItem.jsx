import React, { useState } from "react";
import UpdateItemForm from "./UpdateItemForm";

const ListItem = ({ item, onDelete, onToggle, onUpdateItem }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <UpdateItemForm
          item={item}
          onUpdateItem={(id, name, hour, dayMonth, price) => {
            onUpdateItem(id, name, hour, dayMonth, price);
            setIsEditing(false); // Close the form after updating
          }}
        />
      ) : (
        <>
          <span
            className="item"
            style={{
              textDecoration: item.isCompleted ? "line-through" : "none",
            }}
            onClick={() => onToggle(item.id)}
          >
            {item.name}
          </span>
          <div>Hour: {item.hour}</div>
          <div>Day/Month: {item.dayMonth}</div>
          <div>Price: {item.price}</div>
          <div>
            Completed:
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => onToggle(item.id)}
            />
          </div>
          <button className="btn" onClick={handleEditClick}>
            Edit
          </button>
          <button className="btn" onClick={() => onDelete(item.id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default ListItem;
