import React, { useState } from "react";
import tasksData from "./tasks";
import List from "./List";

const ItemList = () => {
  const [tasks, setTasks] = useState(tasksData);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return <List items={tasks} onDelete={handleDelete} onToggle={handleToggle} />;
};

export default ItemList;