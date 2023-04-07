import React from 'react';

const SearchInput = () => {
  const [term, setTerm] = React.useState('');

  function handleInput(e) {
    setTerm(e.target.value);
  }

  return (
    <fieldset className="search-input__container">
      <input
        className="search-input__search"
        placeholder="Search for any word..."
        type="text"
        value={term}
        onChange={handleInput}
      />
      <p className="search-input__error-message">
        Whoops, can't be empty...
      </p>
    </fieldset>
  );
};

export default SearchInput;
