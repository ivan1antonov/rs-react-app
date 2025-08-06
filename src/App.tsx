import React from 'react';
import './App.scss';
import Main from './pages/Main';

import ErrorBoundary from './components/ErrorBoundary.tsx';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
};

export default App;
