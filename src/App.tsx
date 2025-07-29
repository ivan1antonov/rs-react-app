import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import About from './pages/About.tsx';
import logo from './assets/star-wars.svg';
import Main from './pages/Main';
import { getResults } from './services/services';
import type { resultsType, ApiResponse } from './types/types';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState<resultsType[]>([]);
  const [pagination, setPagination] = useState(0);
  const [shouldThrow, setShouldThrow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function getData(response: ApiResponse): void {
    const results: resultsType[] = response.results.map((item) => ({
      name: item.name,
      text: `Height: ${item.height}, Gender: ${item.gender}, Hair Color: ${item.hair_color}, Birth Year: ${item.birth_year}`,
    }));
    setData(results);
  }

  function curPagination(count: number) {
    setPagination(Math.ceil(count / 10));
  }

  async function getNewData(value: string, page: number = 1) {
    setIsLoading(true);
    try {
      const response = await getResults(value, page);
      getData(response);
      curPagination(response.count);
    } finally {
      setIsLoading(false);
    }
  }

  function createError() {
    setShouldThrow(true);
  }

  useEffect(() => {
    const prevSearch = localStorage.getItem('results') || '';
    getNewData(prevSearch);
    setInputValue(prevSearch);
  }, []);

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

  return (
    <ErrorBoundary>
      <img className="logo" src={logo} />
      <Header value={inputValue} newValue={newValue} onSearch={onSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              data={data}
              shouldThrow={shouldThrow}
              createError={createError}
              isLoading={isLoading}
              pagination={pagination}
              getNewData={getNewData}
            />
          }
        />
        <Route
          path="/:page"
          element={
            <Main
              data={data}
              shouldThrow={shouldThrow}
              createError={createError}
              isLoading={isLoading}
              pagination={pagination}
              getNewData={getNewData}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
