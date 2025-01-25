import React, { useEffect, useState } from "react";
import tasksData from "./../components/tasks";
import ListItem from "./../components/ListItem";

function ItemDetailsPage() {
  const [tasks, setTasks] = useState(tasksData);

  useEffect(() => {
    const storageData = localStorage.getItem("myTasks");
    if (storageData) {
      setTasks(JSON.parse(storageData));
    }
  }, []);

  return (
    <div>
      <h1>ItemDetailsPage</h1>
      <ListItem key={tasks[2].id} item={tasks[2]} />
    </div>
  );
}

export default ItemDetailsPage;
