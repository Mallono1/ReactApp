import React, { useEffect, useState } from "react";
import tasksData from "./tasks";
import List from "./List";
import AddItemForm from "./AddItemForm";

const ItemList = () => {
  const [tasks, setTasks] = useState(tasksData);

  useEffect(() => {
    const storageData = localStorage.getItem("myTasks");
    if (storageData) {
      setTasks(JSON.parse(storageData));
    }
  }, []);

  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("myTasks", JSON.stringify(newTasks));
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);
  };

  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    saveTasks(updatedTasks);
  };

  const handleAddItem = (name, hour, dayMonth, priority) => {
    const newTask = {
      id: tasks.at(-1).id + 1,
      name,
      isCompleted: false,
      hour,
      dayMonth,
      priority,
    };
    saveTasks([...tasks, newTask]);
  };

  const handleUpdateItem = (id, name, hour, dayMonth, priority) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name, hour, dayMonth, priority } : task
    );
    saveTasks(updatedTasks);
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
