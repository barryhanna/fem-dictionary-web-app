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

      <div className="dictionary-entry__meanings-list">
        {wordData.meanings.map((meaning, i) => {
          console.log(meaning);
          return (
            <div
              key={`${meaning}-${i}`}
              className="dictionary-entry__meaning"
            >
              <div className="dictionary-entry__part-of-speech">
                <p>{meaning.partOfSpeech}</p>
              </div>
              <p>Meaning</p>
              <ul className="dictionary-entry__definitions-list">
                {meaning.definitions.map(({ definition }, index) => {
                  return (
                    <li
                      className="dictionary-entry__definition"
                      key={index}
                    >
                      {definition}
                    </li>
                  );
                })}
              </ul>
              <p className="dictionary-entry__synonyms">
                Synonyms{' '}
                {meaning.synonyms.map((synonym, i) => (
                  <span
                    key={synonym}
                    className="dictionary-entry__synonym"
                  >
                    {synonym}
                  </span>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DictionaryEntry;
