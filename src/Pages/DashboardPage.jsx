import React from "react";
import ItemList from "../components/ItemList";
import "./DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <h1>My ToDo´s</h1>
      <ItemList />
    </div>
  );
};

export default DashboardPage;
