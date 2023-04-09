import React from 'react';

const PlayButton = ({ audioPlayer }) => {
  const [play, setPlay] = React.useState(false);
  console.log(audioPlayer);
  function togglePlay() {
    if (play) {
      audioPlayer.current.pause();
      setPlay(false);
    } else {
      audioPlayer.current.play();
      setPlay(true);
    }
  }

  return (
    <button
      className="dictionary-entry__play-button"
      onClick={togglePlay}
    >
      <img src="assets/images/icon-play.svg" alt="" />
      <div className="visually-hidden">Play</div>
    </button>
  );
};

export default PlayButton;
