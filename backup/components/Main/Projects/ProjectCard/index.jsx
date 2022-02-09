import React from 'react';
import P from 'prop-types';

import './style.css';

const ProjectCard = ({ projectInfo }) => {
  const { name, description, imageSrc, githubLink, liveServerLink } = projectInfo;

  return (
    <div className="project">
      <h1>{name}</h1>
      <div className="project-img">
        <img src={imageSrc} alt="pokemon" />
      </div>
      <div className="projects-details">
        <div className="project-text">
          <p>{description}</p>
        </div>
        <div className="project-links">
          <a href={githubLink} target="_blank" className="github" rel="noreferrer">
            <span>
              <img src="./assets/icons/github.png" alt="github icon" />
            </span>
            github
          </a>
          <a href={liveServerLink} target="_blank" className="live" rel="noreferrer">
            <span>
              <img src="./assets/icons/live-server.png" alt="live server icon" />
            </span>
            live demo
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  projectInfo: P.object,
};

export default ProjectCard;
