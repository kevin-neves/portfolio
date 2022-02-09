import React from 'react';
import { AboutMe, Introduction, Projects, Skills } from '../index';
import Contact from './Contact';
import P from 'prop-types';

import './style.css';

const Main = ({ myRef }) => {
  return (
    <main>
      <Introduction myRef={myRef} />
      <AboutMe myRef={myRef} />
      <Skills myRef={myRef} />
      <Projects myRef={myRef} />
      <Contact myRef={myRef} />
    </main>
  );
};

Main.propTypes = {
  myRef: P.object,
};

export default Main;
