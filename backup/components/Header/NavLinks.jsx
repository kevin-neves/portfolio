import React from 'react';
import P from 'prop-types';

const NavLinks = ({ myRef, setToggle }) => {
  const scrollTo = (index) => {
    myRef.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (setToggle) setToggle((isToggle) => !isToggle);
  };

  return (
    <ul className="navbar-light">
      <a onClick={() => scrollTo(0)}>
        <li>HOME</li>
      </a>
      <a onClick={() => scrollTo(1)}>
        <li>ABOUT</li>
      </a>
      <a onClick={() => scrollTo(2)}>
        <li>SKILLS</li>
      </a>
      <a onClick={() => scrollTo(3)}>
        <li>PROJECTS</li>
      </a>
      <a onClick={() => scrollTo(4)}>
        <li>CONTACT</li>
      </a>
    </ul>
  );
};

NavLinks.propTypes = {
  myRef: P.object,
  setToggle: P.func,
};

export default NavLinks;
