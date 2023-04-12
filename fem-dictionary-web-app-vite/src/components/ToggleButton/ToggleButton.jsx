import React from 'react';
import { ThemeContext } from '../../App';
const ToggleButton = () => {
  const [toggle, setToggle] = React.useState(false);
  const toggleTheme = React.useContext(ThemeContext);

  const handleClick = (e) => {
    toggleTheme(toggle);
    setToggle(!toggle);
  };

  return (
    <>
      <button
        className={`toggle-button${toggle ? ' on' : ''}`}
        onClick={handleClick}
        aria-label="Toggle Theme"
      ></button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke={`var(--clr-toggle-${toggle ? 'on' : 'off'})`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
      <div className="visually-hidden">Toggle Theme</div>
    </>
  );
};

export default ToggleButton;
