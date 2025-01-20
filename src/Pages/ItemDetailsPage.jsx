import React from "react";
import { useParams } from "react-router-dom";
import tasksData from "../components/tasks";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const item = tasksData.find((task) => task.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="item-details">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Status: {item.isCompleted ? "Completed" : "Incomplete"}</p>
    </div>
  );
};

export default ItemDetailsPage;
