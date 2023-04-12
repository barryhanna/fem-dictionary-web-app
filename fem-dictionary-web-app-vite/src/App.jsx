import React from 'react';
import DictionaryEntry from './components/DictionaryEntry/DictionaryEntry';
import NavBar from './components/Navbar/NavBar';
import SearchInput from './components/SearchInput/SearchInput';
import { ClockLoader } from 'react-spinners';

export const ThemeContext = React.createContext();

function App() {
  const DICTIONARY_URL =
    'https://api.dictionaryapi.dev/api/v2/entries/en/';
  const [word, setWord] = React.useState('keyboard');
  const [loading, setLoading] = React.useState(false);
  const [theme, toggleTheme] = React.useState('light');

  React.useEffect(() => {
    if (theme) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [theme]);

  React.useEffect(() => {
    if (!word) return;

    async function getWordData() {
      if (typeof word === 'object') return;
      const res = await fetch(`${DICTIONARY_URL}${word}`);
      if (!res.ok) {
        return;
      }

      const json = await res.json();

      if (!json[0].word) {
        return;
      }
      setWord(json[0]);
    }

    setLoading(true);
    getWordData();
    setTimeout(() => setLoading(false), 500);
  }, [word]);

  return (
    <main>
      <div className="App">
        <h1 className="visually-hidden">Dictionary Web App</h1>
        <ThemeContext.Provider value={toggleTheme}>
          <NavBar />
        </ThemeContext.Provider>
        <SearchInput word={word} setWord={setWord} />
        {loading && (
          <div className="dictionary-entry__spinner-container">
            <ClockLoader
              size={200}
              aria-label="Loading Spinner"
              color={'var(--clr-accent)'}
            />
          </div>
        )}
        {!loading && <DictionaryEntry wordData={word} />}
      </div>
    </main>
  );
}

export default App;
