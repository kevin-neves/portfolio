import React from 'react';

import './style.css';

const ProjectCard = () => {
  return (
    <div className="project">
      <h1 className="title-mobile">Pokemon Top Trumps</h1>
      <div className="project-container">
        <div className="project-img">
          <img src="./assets/PokemonProject.JPG" alt="pokemon" />
        </div>
        <div className="project-details">
          <h1 className="title-pc">Pokemon Top Trumps</h1>
          <div className="project-text">
            <p>Pokemon project using only Vanilla Javascript, and connected to PokeAPI</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/kevin-neves/pokemon-game" target="_blank" className="github" rel="noreferrer">
              <span>
                <img src="./assets/icons/github.png" alt="github icon" />
              </span>
              github
            </a>
            <a href="https://pokemon-game-lemon.vercel.app/" target="_blank" className="live" rel="noreferrer">
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

export default ProjectCard;
