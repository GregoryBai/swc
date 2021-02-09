import { useState, useEffect, useCallback } from 'react';
import { getResultsObj } from './const';
import { MIN_CHARS } from './GLOBAL_SETTINGS';

const useApi = (initValue) => {
  const [query, setQuery] = useState(initValue);
  const [results, setResults] = useState(() => ({
    starships: [],
    people: [],
    planets: [],
    films: [],
    species: [],
    vehicles: [],
  }));
  const [loading, setLoading] = useState(false);

  const handleCall = useCallback(() => {
    setLoading(true);
    getResultsObj(query.trim()).then((obj) => {
      setResults(obj);
      setLoading(false);
    });
  }, [query]);

  useEffect(() => {
    query.trim().length > MIN_CHARS && handleCall();
  }, [query, handleCall]);

  return {
    query,
    setQuery,
    loading,
    results,
    searchBarProps: { query, setQuery, loading },
  };
};

export default useApi;
