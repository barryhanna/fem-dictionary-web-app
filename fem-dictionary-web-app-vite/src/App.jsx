import React from 'react';
import DictionaryEntry from './components/DictionaryEntry/DictionaryEntry';
import NavBar from './components/Navbar/NavBar';
import SearchInput from './components/SearchInput/SearchInput';
import { data } from './data/example-word';

function App() {
  const DICTIONARY_URL =
    'https://api.dictionaryapi.dev/api/v2/entries/en/';
  const [word, setWord] = React.useState('');

  React.useEffect(() => {
    async function getWordData() {
      const res = await fetch(`${DICTIONARY_URL}${word}`);
      const json = await res.json();

      if (!json[0].word) {
        return;
      }
      setWord(json[0]);
    }
    getWordData();
  }, [word]);

  return (
    <div className="App">
      <NavBar />
      <SearchInput word={word} setWord={setWord} />
      <DictionaryEntry wordData={word} />
    </div>
  );
}

export default App;
