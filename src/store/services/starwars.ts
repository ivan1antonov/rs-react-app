import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Response } from '../../types/types';

const api = {
  people: 'https://www.swapi.tech/api/people',
  alternative: 'https://swapi.py4e.com/api/people',
  withImage: 'https://akabab.github.io/starwars-api/',
};

export const starwarsApi = createApi({
  reducerPath: 'starwarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: api.alternative }),
  endpoints: (builder) => ({
    getPersonStarWars: builder.query<Response, string | null>({
      query: (name) => (name ? `?search=${name}` : '/'),
    }),
  }),
});

export const { useGetPersonStarWarsQuery } = starwarsApi;
