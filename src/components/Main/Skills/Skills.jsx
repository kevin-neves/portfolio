import React from 'react';
import P, { element } from 'prop-types';

import './style.css';

const Skills = ({ myRef }) => {
  return (
    <section className="skills" ref={(element) => (myRef.current[2] = element)}>
      <div>
        <h1 className="skills-title">SKILLS</h1>
      </div>
      <div className="skills-container">
        <ul>
          <li>
            <img src="./assets/html-logo.svg" alt="" />
            <p>HTML</p>
          </li>
          <li>
            <img src="./assets/css-logo.svg" alt="" />
            <p>CSS</p>
          </li>
          <li>
            <img src="./assets/js-logo.svg" alt="" />
            <p>JavaScript</p>
          </li>
          <li>
            <img src="./assets/typescript-logo.png" alt="" />
            <p>TypeScript</p>
          </li>
          <li>
            <img src="./assets/react-logo.svg" alt="" />
            <p>React</p>
          </li>
          <li>
            <img src="./assets/jest-logo.png" alt="" />
            <p>Jest</p>
          </li>
          <li>
            <img src="./assets/python-logo.svg" alt="" />
            <p>Python</p>
          </li>
          <li>
            <img src="./assets/r-logo.svg" alt="" />
            <p>R</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

Skills.propTypes = {
  myRef: P.object,
};
export default Skills;
