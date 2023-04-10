import React from 'react';

const DictionarySource = ({ sourceUrls }) => {
  return (
    <p className="dictionary-entry__source">
      <span className="dictionary-entry__source-heading">
        Source{'  '}
      </span>
      {sourceUrls.map((url) => (
        <a key={url} href={url} target="_blank">
          {url} <img src="assets/images/icon-new-window.svg" />
        </a>
      ))}
    </p>
  );
};

export default DictionarySource;
