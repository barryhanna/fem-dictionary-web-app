import React from 'react';
import PlayButton from '../PlayButton/PlayButton';

const DictionaryEntry = ({ wordData }) => {
  const audioPlayerRef = React.useRef(null);

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
          <audio ref={audioPlayerRef} src={wordData.audio}></audio>
          <PlayButton audioPlayer={audioPlayerRef} />
        </div>
      </header>

      <div className="dictionary-entry__meanings-list">
        {wordData.meanings.map((meaning, i) => {
          return (
            <div
              key={`${meaning}-${i}`}
              className="dictionary-entry__meaning"
            >
              <div className="dictionary-entry__part-of-speech">
                <p>{meaning.partOfSpeech}</p>
              </div>
              <p className="dictionary-entry__meaning-label">
                Meaning
              </p>
              <ul className="dictionary-entry__definitions-list">
                {meaning.definitions.map(
                  ({ definition, example }, index) => {
                    return (
                      <li
                        className="dictionary-entry__definition"
                        key={index}
                      >
                        {definition}
                        {example && (
                          <p className="dictionary-entry__example">
                            "{example}"
                          </p>
                        )}
                      </li>
                    );
                  }
                )}
              </ul>

              {meaning.synonyms.length > 0 && (
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
              )}
            </div>
          );
        })}
      </div>
      <p className="dictionary-entry__source">
        <span className="dictionary-entry__source-heading">
          Source{'  '}
        </span>
        {wordData.sourceUrls.map((url) => (
          <a key={url} href={url} target="_blank">
            {url} <img src="assets/images/icon-new-window.svg" />
          </a>
        ))}
      </p>
    </div>
  );
};

export default DictionaryEntry;
