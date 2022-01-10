import React from 'react';
import Forms from './Forms';
import P, { element } from 'prop-types';

import './style.css';

const Contact = ({ myRef }) => {
  return (
    <section className="forms-container" ref={(element) => (myRef.current[4] = element)}>
      <h1>CONTACT ME</h1>
      <div className="contact-container">
        <Forms />
      </div>
    </section>
  );
};

Contact.propTypes = {
  myRef: P.object,
};

export default Contact;
