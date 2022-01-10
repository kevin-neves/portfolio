import React from 'react';
import ProjectCard from './ProjectCard';
import P from 'prop-types';

import './style.css';

const Projects = ({ myRef }) => {
  return (
    <section className="projects" ref={(element) => (myRef.current[3] = element)}>
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-container">
        <ProjectCard />
      </div>
    </section>
  );
};

Projects.propTypes = {
  myRef: P.object,
};

export default Projects;
