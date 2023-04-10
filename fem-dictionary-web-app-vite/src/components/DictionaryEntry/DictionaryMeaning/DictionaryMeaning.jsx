import React from 'react';

const DictionaryMeaning = ({ definition, example, index }) => {
  return (
    <li className="dictionary-entry__definition" key={index}>
      {definition}
      {example && (
        <p className="dictionary-entry__example">"{example}"</p>
      )}
    </li>
  );
};

export default DictionaryMeaning;
