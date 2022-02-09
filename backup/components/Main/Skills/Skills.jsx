import React from 'react';
import P, { element } from 'prop-types';

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
            <div></div>
          </li>
          <li>
            <img src="./assets/css-logo.svg" alt="" />
            <div></div>
          </li>
          <li>
            <img src="./assets/js-logo.svg" alt="" />
            <div></div>
          </li>
          <li>
            <img src="./assets/react-logo.svg" alt="" />
            <div></div>
          </li>
          <li>
            <img src="./assets/python-logo.svg" alt="" />
            <div></div>
          </li>
          <li>
            <img src="./assets/r-logo.svg" alt="" />
            <div></div>
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
