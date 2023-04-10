import React from 'react';

const PlayButton = ({ audioPlayer }) => {
  return (
    <button
      className="dictionary-entry__play-button"
      onClick={() => {
        audioPlayer.current.play();
      }}
    >
      <img src="assets/images/icon-play.svg" alt="" />
      <div className="visually-hidden">Play</div>
    </button>
  );
};

export default PlayButton;
