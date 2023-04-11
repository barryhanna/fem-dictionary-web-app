import React from 'react';
import DictionaryHeader from './DictionaryHeader/DictionaryHeader';
import DictionarySource from './DictionarySource/DictionarySource';
import DictionaryMeaning from './DictionaryMeaning/DictionaryMeaning';
import DictionarySynonym from './DictionarySynonym/DictionarySynonym';
import uuid from 'react-uuid';

const DictionaryEntry = ({ wordData }) => {
  if (!wordData.word) {
    return (
      <div className="dictionary-entry__container">
        <p>Word not found</p>
      </div>
    );
  }
  const audioFile = wordData.phonetics.filter(
    (phonetic) => phonetic.audio
  )[0]?.audio;

  return (
    <div className="dictionary-entry__container">
      <DictionaryHeader
        word={wordData.word}
        phonetic={wordData.phonetic}
        audio={audioFile}
      />

      <div className="dictionary-entry__meanings-list">
        {wordData.meanings.map((meaning, i) => {
          return (
            <div key={uuid()} className="dictionary-entry__meaning">
              <div className="dictionary-entry__part-of-speech">
                <p>{meaning.partOfSpeech}</p>
              </div>
              <p className="dictionary-entry__meaning-label">
                Meaning
              </p>
              <ul className="dictionary-entry__definitions-list">
                {meaning.definitions.map(
                  ({ definition, example }) => (
                    <DictionaryMeaning
                      definition={definition}
                      example={example}
                      key={uuid()}
                    />
                  )
                )}
              </ul>

              {meaning.synonyms.length > 0 && (
                <p className="dictionary-entry__synonyms">
                  Synonyms{' '}
                  {meaning.synonyms.map((synonym) => (
                    <DictionarySynonym
                      key={uuid()}
                      synonym={synonym}
                    />
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
