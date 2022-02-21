import React from 'react';
import P from 'prop-types';

import './style.css';

const Introduction = ({ myRef }) => {
  const scrollToContact = () => myRef.current[4].scrollIntoView({ behavior: 'smooth', block: 'center' });
  return (
    <>
      <section className="introduction" ref={(element) => (myRef.current[0] = element)}>
        <div className="indroduction-container">
          <h1 className="name">Kevin Jr. A. Neves</h1>
          <h1 className="subtitle">Web Developer with knowledge in Data Science</h1>
        </div>
        <div>
          <button type="button" className="btn btn-contact" onClick={() => scrollToContact()}>
            Contact me
          </button>
        </div>
      </section>
      <div className="background space after-introduction"></div>
    </>
  );
};

Introduction.propTypes = {
  myRef: P.object,
};

export default Introduction;
