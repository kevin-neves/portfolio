import React from 'react';
import P from 'prop-types';

import './style.css';

const ProjectCard = ({ projectInfo, index }) => {
  const { name, description, imageSrc, githubLink, liveServerLink } = projectInfo;

  const applyStyle = (index) => {
    if (index % 2 === 0) {
      return { flexDirection: 'row-reverse' };
    } else {
      return { flexDirection: 'row' };
    }
  };
  return (
    <div className="project">
      <h1 className="title-mobile">{name}</h1>
      <div className="project-container" style={applyStyle(index)}>
        <div className="project-img">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="project-details">
          <h1 className="title-pc">{name}</h1>
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
    </div>
  );
};

ProjectCard.propTypes = {
  index: P.number,
  projectInfo: P.object,
};

export default ProjectCard;
