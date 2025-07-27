import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Loader from './components/Loader.tsx';
import { getResults } from './services/services.tsx';
import type { resultsType, ApiResponse } from './types/types.tsx';

const App: React.FC = () => {
  const [data, setData] = useState<resultsType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [shouldThrow, setShouldThrow] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const prevSearch = localStorage.getItem('results');
    if (prevSearch) {
      getNewData(prevSearch);
    } else {
      getNewData('');
    }
  }, []);

  function getData(response: ApiResponse): void {
    const results: resultsType[] = response.results.map((item) => ({
      name: item.name,
      text: `Height: ${item.height}, Gender: ${item.gender}, Hair Color: ${item.hair_color}, Birth Year: ${item.birth_year}`,
    }));
    setData(results);
  }

  async function getNewData(value: string) {
    setisLoading(true);
    try {
      const response = await getResults(value);
      getData(response);
    } finally {
      setisLoading(false);
    }
  }
  const newValue = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  function onSearch() {
    if (localStorage.getItem('results') === inputValue.trim()) {
      return;
    }
    getNewData(inputValue.trim());
    setInputValue('');
  }
  function createError() {
    setShouldThrow(true);
  }
  return (
    <ErrorBoundary>
      <Header value={inputValue} newValue={newValue} onSearch={onSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <Content data={data} shouldThrow={shouldThrow} isError={createError} />
      )}
    </ErrorBoundary>
  );
};

export default App;
