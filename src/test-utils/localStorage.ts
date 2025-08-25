import { vi, type Mock } from 'vitest';

export const localStorageMock: Partial<Storage> = {
  setItem: vi.fn(),
  getItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  key: vi.fn(),
  length: 0,
};

export const resetLocalStorageMock = () => {
  (localStorageMock.setItem as Mock)?.mockReset();
  (localStorageMock.getItem as Mock)?.mockReset();
  (localStorageMock.removeItem as Mock)?.mockReset();
  (localStorageMock.clear as Mock)?.mockReset();
  (localStorageMock.key as Mock)?.mockReset();
};

export const mockResponseName = {
  results: [{ name: 'Luke Skywalker' }],
};

export const mockResults = {
  results: [
    {
      name: 'Luke Skywalker',
      height: '172',
      gender: 'male',
      hair_color: 'blond',
      birth_year: '19BBY',
    },
    {
      name: 'C-3PO',
      height: 167,
      gender: 'n/a',
      hair_color: 'n/a',
      birth_year: '112BBY',
    },
  ],
};
