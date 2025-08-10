import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse, Person } from '../../types/types';

const api = {
  people: 'https://www.swapi.tech/api/people/',
  alternative: 'https://swapi.py4e.com/api/people/',
  withImage: 'https://akabab.github.io/starwars-api/api/',
};

export const starwarsApi = createApi({
  reducerPath: 'starwarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: api.alternative }),
  keepUnusedDataFor: 120,
  endpoints: (builder) => ({
    getPersonStarWars: builder.query<ApiResponse, { search?: string; page?: number }>({
      query: ({ search, page }) => {
        const params = new URLSearchParams();

        if (search) params.append('search', search);
        if (page) params.append('page', String(page));

        const queryString = params.toString();

        return queryString ? `?${queryString}` : '/';
      },
    }),
  }),
});

export const starwarsDetailApi = createApi({
  reducerPath: 'starwarsDetailApi',
  baseQuery: fetchBaseQuery({ baseUrl: api.withImage }),
  keepUnusedDataFor: 120,
  endpoints: (builder) => ({
    getDetailPerson: builder.query<Person, { id?: number }>({
      query: ({ id }) => {
        return `/id/${id}.json`;
      },
    }),
  }),
});

export const { useGetPersonStarWarsQuery, useLazyGetPersonStarWarsQuery } = starwarsApi;

export const { useGetDetailPersonQuery, useLazyGetDetailPersonQuery } = starwarsDetailApi;
