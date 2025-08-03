import React, { useEffect } from 'react';
import './App.css';
import Main from './pages/Main';
import { fetchResultsThunk } from './store/thunks/thunk';
import type { AppDispatch } from './store';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const results = localStorage.getItem('results') || '';
  useEffect(() => {
    dispatch(fetchResultsThunk({ query: results || 'all' }));
  }, [dispatch, results]);

  return <Main />;
};

export default App;

// const addValue = (value) => {
//   dispatch({ type: 'NEW_VALUE', payload: value });
// };

// function getData(response: ApiResponse): void {
//   const results: resultsType[] = response.results.map((item) => ({
//     name: item.name,
//     text: `Height: ${item.height}, Gender: ${item.gender}, Hair Color: ${item.hair_color}, Birth Year: ${item.birth_year}`,
//     url: item.url,
//   }));
//   setData(results);
// }

// function curPagination(count: number) {
//   setPagination(Math.ceil(count / 10));
// }

// async function getNewData(value: string, page: number = 1) {
//   setIsLoading(true);
//   try {
//     const response = await getResults(value, page);
//     getData(response);
//     curPagination(response.count);
//   } finally {
//     setIsLoading(false);
//   }
// }

// useEffect(() => {
//   const prevSearch = localStorage.getItem('results') || '';
//   getNewData(prevSearch);
//   setInputValue(prevSearch);
// }, []);

// function onSearch() {
//   navigate('/');
//   if (localStorage.getItem('results') === inputValue.trim()) {
//     return;
//   }
//   getNewData(inputValue.trim());
//   setInputValue('');
// }
