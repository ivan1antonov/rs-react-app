import React, { useEffect } from 'react';
import './App.css';
import Main from './pages/Main';
import { fetchResultsThunk } from './store/thunks/thunk';
import type { AppDispatch } from './store';
import { useDispatch } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary.tsx';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const results = localStorage.getItem('results') || '';
  // console.log('results: ', results);
  useEffect(() => {
    dispatch(fetchResultsThunk({ query: results }));
  }, []);

  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
};

export default App;
