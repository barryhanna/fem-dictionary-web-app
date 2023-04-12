import React from 'react';

const SearchInput = ({ setWord }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [error, setError] = React.useState(false);

  function handleInput(e) {
    if (error) {
      setError(false);
    }
    const searchTerm = e.target.value.trim().toLowerCase();
    setSearchTerm(searchTerm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm === '') {
      setError(true);
      return;
    }
    setWord(searchTerm);
  }

  return (
    <form className="search-input__container" onSubmit={handleSubmit}>
      <input
        className="search-input__search"
        placeholder="Search for any word..."
        type="text"
        value={searchTerm}
        onChange={handleInput}
      />
      <p className="search-input__error-message" hidden={!error}>
        Whoops, can't be empty...
      </p>
    </form>
  );
};

export default SearchInput;
