import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home container">
      <div className="content">
        <h4>Welcome to our Hompage where you can create your ToDo-List</h4>
        <p>
          Lets start to make your ToDo-List! click here to go to the{" "}
          <a href="/Dashboard">ToDo</a> page.
        </p>
      </div>
    </div>
  );
};

export default Home;
