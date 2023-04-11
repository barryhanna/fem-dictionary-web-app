import React from 'react';

const PlayButton = ({ audioPlayer }) => {
  return (
    <button
      className="dictionary-entry__play-button"
      onClick={() => {
        audioPlayer.current.play();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
      >
        <g>
          <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
          <path d="M29 27v21l21-10.5z" />
        </g>
      </svg>
      <div className="visually-hidden">Play</div>
    </button>
  );
};

export default PlayButton;
