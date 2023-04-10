import React from 'react';

const DictionarySynonym = ({ synonym }) => {
  return (
    <span key={synonym} className="dictionary-entry__synonym">
      {synonym}
    </span>
  );
};

export default DictionarySynonym;
