import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import TypefaceSelector from '../TypefaceSelector/TypefaceSelector';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src="/assets/images/logo.svg" alt="" />

      <div className="options">
        <TypefaceSelector />
        <ToggleButton />
      </div>
    </nav>
  );
};

export default NavBar;
