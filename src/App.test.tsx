import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { mockResults } from './test-utils/localStorage';
import { MemoryRouter } from 'react-router-dom';
import * as services from './services/services';
import type { ApiResponse } from './types/types';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App component', () => {
  beforeEach(() => {
    vi.spyOn(services, 'getResults').mockResolvedValue(mockResults);
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('calls getResults on mount and displays content after loading', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByAltText('loading...')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });
    expect(services.getResults).toHaveBeenCalledWith('');
  });

  it('shows loader while fetching data', async () => {
    const fetchPromise = new Promise<ApiResponse>(() => {});
    vi.spyOn(services, 'getResults').mockImplementation(() => fetchPromise);
    localStorage.clear();

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByAltText('loading...')).toBeInTheDocument();
  });

  it('updates input value and triggers search on button click', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText('Do you want find anyone?');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'Luke Skywalker');
    expect(input).toHaveValue('Luke Skywalker');

    await userEvent.click(button);

    expect(services.getResults).toHaveBeenCalledWith('Luke Skywalker');

    expect(input).toHaveValue('');
  });
});
