import React from "react";
import ListItem from "./ListItem";
import "./List.css"; // Import the CSS file

const List = ({ items, onDelete, onToggle, onUpdateItem }) => {
  return (
    <ul className="task-list">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </ul>
  );
};

export default List;
