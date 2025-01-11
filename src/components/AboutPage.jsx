// src/AboutPage.js
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1>About This Project</h1>
      <p>Project description goes here.</p>
      <h2>Team Members</h2>
      <ul>
        <li>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your LinkedIn
          </a>
        </li>
        {/* Add more team members as needed */}
      </ul>
    </div>
  );
};

export default AboutPage;
