import React, { useState } from "react";
import tasksData from "./tasks";
import List from "./List";
import AddItemForm from "./AddItemForm";

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

  const handleAddItem = (name, hour, dayMonth, price) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      isCompleted: false,
      hour,
      dayMonth,
      price,
    };
    setTasks([...tasks, newTask]);
  };

  const handleUpdateItem = (id, name, hour, dayMonth, price) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name, hour, dayMonth, price } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <AddItemForm onAddItem={handleAddItem} />
      <List
        items={tasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onUpdateItem={handleUpdateItem}
      />
    </div>
  );
};

export default ItemList;
