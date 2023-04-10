import React from 'react';
import DictionaryHeader from './DictionaryHeader/DictionaryHeader';
import DictionarySource from './DictionarySource/DictionarySource';
import DictionaryMeaning from './DictionaryMeaning/DictionaryMeaning';
import DictionarySynonym from './DictionarySynonym/DictionarySynonym';

const DictionaryEntry = ({ wordData }) => {
  return (
    <div className="dictionary-entry__container">
      <DictionaryHeader
        word={wordData.word}
        phonetic={wordData.phonetic}
        audio={wordData.audio}
      />

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
                  ({ definition, example }, index) => (
                    <DictionaryMeaning
                      definition={definition}
                      example={example}
                      index={index}
                    />
                  )
                )}
              </ul>

              {meaning.synonyms.length > 0 && (
                <p className="dictionary-entry__synonyms">
                  Synonyms{' '}
                  {meaning.synonyms.map((synonym) => (
                    <DictionarySynonym synonym={synonym} />
                  ))}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <DictionarySource sourceUrls={wordData.sourceUrls} />
    </div>
  );
};

export default DictionaryEntry;
