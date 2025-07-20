import { getResults } from './services';
import { describe, it, expect, vi, beforeEach, afterEach, type Mock } from 'vitest';

describe('getResults', () => {
  const original = window.fetch;
  beforeEach(() => {
    window.fetch = vi.fn();

    const localStorageMock: Partial<Storage> = {
      setItem: vi.fn(),
      getItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      key: vi.fn(),
      length: 0,
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
  });
  afterEach(() => {
    vi.resetAllMocks();
    window.fetch = original;
  });
  it('fetches data and stores query in localStorage', async () => {
    const mockResponse = {
      results: [{ name: 'Luke Skywalker' }],
    };

    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse),
    });

    const query = 'Luke';
    const data = await getResults(query);

    expect(fetch).toHaveBeenCalledWith(`https://swapi.py4e.com/api/people/?search=${query}`);
    expect(localStorage.setItem).toHaveBeenCalledWith('results', query);
    expect(data).toEqual(mockResponse);
  });

  it('throws error if fetch fails', async () => {
    (window.fetch as Mock).mockRejectedValue(new Error('Network error'));

    await expect(getResults('Luke')).rejects.toThrow('Network error');
  });
});
