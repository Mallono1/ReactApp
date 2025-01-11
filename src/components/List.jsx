import React from "react";
import ListItem from "./ListItem";

const List = ({ items, onDelete, onToggle }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default List;