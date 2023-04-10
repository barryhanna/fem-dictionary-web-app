import React from 'react';

const DictionaryMeaning = ({ definition, example }) => {
  return (
    <li className="dictionary-entry__definition">
      {definition}
      {example && (
        <p className="dictionary-entry__example">"{example}"</p>
      )}
    </li>
  );
};

export default DictionaryMeaning;
