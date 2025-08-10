import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Content from '../components/Content';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../store';
import type { AppDispatch } from '../store';
import { starwarsApi, starwarsDetailApi } from '../store/services/starwars';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../store/services/dispatch', () => ({
  callAction: (dispatch: AppDispatch) => ({
    toggleShouldThrow: vi.fn(() => dispatch({ type: 'toggleShouldThrow' })),
    setPagination: vi.fn(),
    removeSelect: vi.fn(),
    addSelect: vi.fn(),
    clearSelect: vi.fn(),
  }),
}));

function createTestStore(preloadedState = {}) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(starwarsApi.middleware).concat(starwarsDetailApi.middleware),
    preloadedState,
  });
}

describe('Content component', () => {
  it('renders buttons and handles clicks', () => {
    const store = createTestStore({
      shouldThrowReducer: { shouldThrow: false },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Content />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('break the universe')).toBeDefined();
    expect(screen.getByText('reset cache and reload data')).toBeDefined();

    fireEvent.click(screen.getByText('break the universe'));
    fireEvent.click(screen.getByText('reset cache and reload data'));
  });

  it('throws error if shouldThrow is true', () => {
    const store = createTestStore({
      shouldThrowReducer: { shouldThrow: true },
    });

    expect(() =>
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Content />
          </MemoryRouter>
        </Provider>
      )
    ).toThrow('Error inside to Content');
  });
});
