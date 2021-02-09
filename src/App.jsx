import './App.css';
import { SearchBar, Layout } from './components';
import useApi from './features/useApi';
import ResultsOutput from './components/ResultsOutput';

function App() {
  const { searchBarProps, results, query } = useApi('');

  return (
    <div>
      <Layout>
        <SearchBar {...searchBarProps} />
      </Layout>
      <ResultsOutput data={results} query={query} />
    </div>
  );
}

export default App;
