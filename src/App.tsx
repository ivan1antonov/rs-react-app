import React from 'react';
import './App.css';
import Main from './pages/Main';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';

import type { RootState } from './store';
// import { useNavigate, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import ErrorBoundary from './components/ErrorBoundary.tsx';
// import About from './pages/About.tsx';

// import NotFound from './pages/NotFound.tsx';
// import { getResults } from './services/services';
// import type { resultsType, ApiResponse } from './types/types';
// import Details from './pages/Details.tsx';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import type { RootState } from './store/index.ts';

// const dispatch = useDispatch();
// const value = useSelector((state: RootState) => state.value);
// const isLoader = useSelector((state: RootState) => state.isLoader);

// const navigate = useNavigate();
// const [data, setData] = useState<resultsType[]>([]);
// const [inputValue, setInputValue] = useState('');
// const [pagination, setPagination] = useState(0);
// const [shouldThrow, setShouldThrow] = useState(false);
// const [isLoading, setIsLoading] = useState(true);

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

// function createError() {
//   setShouldThrow(true);
// }

// useEffect(() => {
//   const prevSearch = localStorage.getItem('results') || '';
//   getNewData(prevSearch);
//   setInputValue(prevSearch);
// }, []);

// const newValue = useCallback((value: string) => {
//   setInputValue(value);
// }, []);

// function onSearch() {
//   navigate('/');
//   if (localStorage.getItem('results') === inputValue.trim()) {
//     return;
//   }
//   getNewData(inputValue.trim());
//   setInputValue('');
// }
const App: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.loaderReducer.isLoader);
  return isLoading ? <Loader /> : <Main />;
};

export default App;
