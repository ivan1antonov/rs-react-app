import { getResults } from './services';
import { describe, it, expect, vi, beforeEach, afterEach, type Mock } from 'vitest';
import { localStorageMock, resetLocalStorageMock } from '../test-utils/localStorage';
import { mockResponseName } from '../test-utils/localStorage';

describe('getResults', () => {
  const original = window.fetch;
  beforeEach(() => {
    window.fetch = vi.fn();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
    resetLocalStorageMock();
    window.fetch = original;
  });

  it('fetches data and stores query in localStorage', async () => {
    (window.fetch as Mock).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponseName),
    });

    const query = 'Luke';
    const data = await getResults(query);

    expect(fetch).toHaveBeenCalledWith(`https://swapi.py4e.com/api/people/?search=${query}&page=1`);
    expect(localStorage.setItem).toHaveBeenCalledWith('results', query);
    expect(data).toEqual(mockResponseName);
  });

  it('throws error if fetch fails', async () => {
    (window.fetch as Mock).mockRejectedValue(new Error('Network error'));

    await expect(getResults('Luke')).rejects.toThrow('Network error');
  });
});
