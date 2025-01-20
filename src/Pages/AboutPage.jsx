import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <h1>About This Project</h1>
      <p>Welcome to our first React project, a simple Todo List, </p>
      <p>
        Where you can see the details of each object, update and create new ones
        if need.
      </p>
      <h2>Team Members</h2>
      <ul>
        <li>
          <a
            href="https://github.com/GFurtado-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gonçalo GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gon%C3%A7alo-furtado-22820233b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gonçalo LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mallono1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marian GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marian LinkedIn
          </a>
        </li>

        {/* Add more team members as needed */}
      </ul>
    </div>
  );
};
export default AboutPage;
