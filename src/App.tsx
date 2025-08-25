import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import About from './pages/About.tsx';
import logo from '/star-wars.svg';
import Main from './pages/Main';
import NotFound from './pages/NotFound.tsx';
import { getResults } from './services/services';
import type { resultsType, ApiResponse } from './types/types';
import Details from './pages/Details.tsx';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState<resultsType[]>([]);
  const [pagination, setPagination] = useState(0);
  const [shouldThrow, setShouldThrow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function getData(response: ApiResponse): void {
    const results: resultsType[] = response.results.map(
      ({ name, height, gender, hair_color, url, birth_year }) => ({
        name: name,
        text: `Height: ${height}, Gender: ${gender}, Hair Color: ${hair_color}, Birth Year: ${birth_year}`,
        url: url,
      })
    );
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
        >
          <Route path="details/:id" element={<Details />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
