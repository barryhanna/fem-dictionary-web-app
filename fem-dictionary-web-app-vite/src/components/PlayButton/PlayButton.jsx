import React from 'react';

const PlayButton = () => {
  return (
    <button className="dictionary-entry__play-button">
      <img src="assets/images/icon-play.svg" alt="" />
      <div className="visually-hidden">Play</div>
    </button>
  );
};

export default PlayButton;
