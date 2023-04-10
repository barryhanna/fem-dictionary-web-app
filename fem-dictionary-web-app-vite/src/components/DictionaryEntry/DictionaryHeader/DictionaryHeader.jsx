import React from 'react';
import PlayButton from '../../PlayButton/PlayButton';

const DictionaryHeader = ({ word, phonetic, audio }) => {
  const audioPlayerRef = React.useRef();
  console.log(audio);
  return (
    <header className="dictionary-entry__interactive-header">
      <div className="dictionary-entry__word-container">
        <h2 className="dictionary-entry__word">{word}</h2>
        <p className="dictionary-entry__phonetic">{phonetic}</p>
      </div>
      <div className="dictionary-entry__audio-player">
        <audio
          ref={audioPlayerRef}
          src={audio}
          className="dictionary-entry__audio"
        ></audio>
        <PlayButton audioPlayer={audioPlayerRef} />
      </div>
    </header>
  );
};

export default DictionaryHeader;
