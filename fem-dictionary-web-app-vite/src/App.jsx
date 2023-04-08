import DictionaryEntry from './components/DictionaryEntry/DictionaryEntry';
import NavBar from './components/Navbar/NavBar';
import SearchInput from './components/SearchInput/SearchInput';
import { data } from './data/example-word';

function App() {
  console.log(data);
  return (
    <div className="App">
      <NavBar />
      <SearchInput />
      <DictionaryEntry wordData={data} />
    </div>
  );
}

export default App;
