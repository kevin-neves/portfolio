import React, { useRef } from 'react';
import P from 'prop-types';

const AboutMe = ({ myRef }) => {
  return (
    <section className="about" ref={(element) => (myRef.current[1] = element)}>
      <h1 className="about-title">ABOUT ME</h1>
      <div className="about-container">
        <div className="about-image">
          <img src="./assets/web-dev.jpg" alt="" />
        </div>
        <div className="about-text-container">
          <h1 className="about-text">TL/DR: 9 years math teacher in career transition to become a developer.</h1>
        </div>
      </div>
    </section>
  );
};

AboutMe.propTypes = {
  myRef: P.object,
};

export default AboutMe;
