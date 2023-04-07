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
        type="text"
        value={term}
        onChange={handleInput}
      />
    </fieldset>
  );
};

export default SearchInput;
