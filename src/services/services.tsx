import type { ApiResponse } from '../types/types';

const api = {
  people: 'https://swapi.dev/api/people/',
  planets: 'https://swapi.dev/api/planets/',
  films: 'https://swapi.dev/api/films/',
  species: 'https://swapi.dev/api/species/',
  vehicles: 'https://swapi.dev/api/vehicles/',
  starships: 'https://swapi.dev/api/starships/',
};

function createGetResults() {
  let cachedData: ApiResponse | null = null;
  let cachedQuery = '';

  return async function getResults(query: string): Promise<ApiResponse> {
    if (query === cachedQuery && cachedData) {
      return cachedData;
    }

    const response = await fetch(api.people + `?search=${query}`);
    const data: ApiResponse = await response.json();

    cachedQuery = query;
    cachedData = data;

    return data;
  };
}

export const getResults = createGetResults();
