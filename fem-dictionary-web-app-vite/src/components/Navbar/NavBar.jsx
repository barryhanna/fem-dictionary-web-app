import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import Selector from '../Selector/Selector';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src="/assets/images/logo.svg" alt="" />

      <div className="options">
        <Selector />
        <ToggleButton />
        <img src="/assets/images/icon-moon.svg" alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
