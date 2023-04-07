import DictionaryEntry from './components/DictionaryEntry/DictionaryEntry';
import NavBar from './components/Navbar/NavBar';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchInput />
      <DictionaryEntry />
    </div>
  );
}

export default App;
