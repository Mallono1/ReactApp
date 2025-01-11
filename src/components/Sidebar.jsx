import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" onClick={handleHomeClick}>Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;