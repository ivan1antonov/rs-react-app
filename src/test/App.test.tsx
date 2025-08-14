import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';
import ErrorBoundary from './components/ErrorBoundary';

describe('App component', () => {
  it('renders Main component inside ErrorBoundary', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders fallback UI from ErrorBoundary on error', () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };

    const AppWithError = () => (
      <Provider store={store}>
        <MemoryRouter>
          <ErrorBoundary>
            <ThrowError />
          </ErrorBoundary>
        </MemoryRouter>
      </Provider>
    );

    render(<AppWithError />);

    expect(screen.getByText(/there was an error on the page/i)).toBeInTheDocument();
  });
});
