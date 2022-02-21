import React, { useRef } from 'react';
import P from 'prop-types';

import './style.css';

const AboutMe = ({ myRef }) => {
  return (
    <section className="about" ref={(element) => (myRef.current[1] = element)}>
      <h1 className="about-title">ABOUT ME</h1>
      <div className="about-container">
        <div className="about-image">
          <img src="./assets/web-dev.jpg" alt="" />
        </div>
        <div className="about-text-container">
          <h1 className="about-text">
            I&apos;m a Chemical Engineer and 9 years Math teacher in career transition. Currently studing React and
            Python&apos;s ecosystem for Data Science and Data Analysis.
          </h1>
        </div>
      </div>
    </section>
  );
};

AboutMe.propTypes = {
  myRef: P.object,
};

export default AboutMe;
