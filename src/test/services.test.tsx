import { getResults } from './services';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { Mock } from 'vitest';

describe('getResults', () => {
  const originalFetch = window.fetch;

  beforeEach(() => {
    window.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
    window.fetch = originalFetch;
  });

  it('fetches data by id if query is number', async () => {
    const mockData = { name: 'Luke Skywalker' };
    (window.fetch as Mock).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });

    const query = '1';
    const data = await getResults(query);

    expect(window.fetch).toHaveBeenCalledWith(
      'https://akabab.github.io/starwars-api/api/id/1.json'
    );
    expect(data).toEqual(mockData);
  });

  it('fetches data by name if query is not a number', async () => {
    const mockData = { name: 'Leia Organa' };
    (window.fetch as Mock).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });

    const query = 'Leia';
    const data = await getResults(query);

    expect(window.fetch).toHaveBeenCalledWith(
      'https://akabab.github.io/starwars-api/api/Leia.json'
    );
    expect(data).toEqual(mockData);
  });

  it('throws error if fetch fails', async () => {
    (window.fetch as Mock).mockRejectedValue(new Error('Network error'));

    await expect(getResults('Luke')).rejects.toThrow('Network error');
  });
});
