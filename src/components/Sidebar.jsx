import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { use } from "react";

const Sidebar = () => {
  const [show, setShowSidebar] = useState(true);
  const controlSidebar = () => {
    if (window.scrollY >= 50) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
    useEffect(() => {
      window.addEventListener("scroll", controlSidebar);
      return () => {
        window.removeEventListener("scroll", controlSidebar);
      };
    }, []);
  };

  return (
    <nav className={show ? "sidebar" : "sidebar active"}>
      <ul>
        <li>
          <Link to="/"></Link>
        </li>

        <li>
          <Link to="/dashboard"></Link>
        </li>
        <li>
          <Link to="/about"></Link>
        </li>
        <li>
          <Link to="/item/:id"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
