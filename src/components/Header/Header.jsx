import React, { useEffect } from 'react';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import Navigation from './Navigation/Navigation';
import './styles.css';
import P from 'prop-types';

const Header = ({ myRef }) => {
  const scrollToContact = () => myRef.current[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
  return (
    <>
      <header onScroll={scroll}>
        <div className="logo" onClick={scrollToContact}>
          <img src="./assets/main-logo.svg" alt="" />
        </div>
        <div className="nav-container">
          <Navigation myRef={myRef} />
          <MobileNavigation myRef={myRef} />
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  myRef: P.object,
};

export default Header;
