import React from 'react';
import PlayButton from '../PlayButton/PlayButton';

const DictionaryEntry = ({ wordData }) => {
  return (
    <div className="dictionary-entry__container">
      <header className="dictionary-entry__interactive-header">
        <div className="dictionary-entry__word-container">
          <h2 className="dictionary-entry__word">{wordData.word}</h2>
          <p className="dictionary-entry__phonetic">
            {wordData.phonetic}
          </p>
        </div>
        <div className="dictionary-entry__audio-player">
          <PlayButton />
          <audio src={wordData.audio}></audio>
        </div>
      </header>
    </div>
  );
};

export default DictionaryEntry;
