import React from 'react';
import NavLinks from '../NavLinks';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import P from 'prop-types';

const MobileNavigation = ({ myRef }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="mobile-navigation">
      <div className="hamburger">
        <Hamburger direction="left" color="white" toggled={toggle} toggle={setToggle} />
      </div>
      {toggle && <NavLinks myRef={myRef} setToggle={setToggle} />}
    </nav>
  );
};

MobileNavigation.propTypes = {
  myRef: P.object,
};

export default MobileNavigation;
