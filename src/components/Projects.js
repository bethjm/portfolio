import React from "react";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="card">
          <a>image goes here</a>
          <h3>title of project</h3>
          <p>
            project description. project description. project description.
            project description. project description. project description.
          </p>
        </div>
        <div className="card">
          <a>image goes here</a>
          <h3>title of project</h3>
          <p>
            project description. project description. project description.
            project description. project description. project description.
          </p>
        </div>
        <div className="card">
          <a>image goes here</a>
          <h3>title of project</h3>
          <p>
            project description. project description. project description.
            project description. project description. project description.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
