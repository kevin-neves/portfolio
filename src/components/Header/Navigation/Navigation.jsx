import React from 'react';
import NavLinks from '../NavLinks';
import P from 'prop-types';

const Navigation = ({ myRef }) => {
  return (
    <nav className="navigation">
      <NavLinks myRef={myRef} />
    </nav>
  );
};

Navigation.propTypes = {
  myRef: P.object,
};

export default Navigation;
