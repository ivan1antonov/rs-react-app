import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Loader from './components/Loader.tsx';
import { getResults } from './services/services.tsx';
import type { resultsType, ApiResponse } from './types/types.tsx';
import About from './pages/About.tsx';

const App: React.FC = () => {
  const [data, setData] = useState<resultsType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [shouldThrow, setShouldThrow] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const navigate = useNavigate();
  console.log('App render');

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
    navigate('/');
    if (localStorage.getItem('results') === inputValue.trim()) {
      return;
    }
    getNewData(inputValue.trim());
    setInputValue('');
  }
  function createError() {
    setShouldThrow(true);
  }
  const Main = () => {
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <Content data={data} shouldThrow={shouldThrow} isError={createError} />
        )}
      </>
    );
  };

  return (
    <ErrorBoundary>
      <Header value={inputValue} newValue={newValue} onSearch={onSearch} />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
