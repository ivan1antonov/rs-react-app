import type { Person } from '../types/types';

const api = {
  people: 'https://swapi.py4e.com/api/people/',
};

export async function getResults(query: string, page: number = 1) {
  const res = await fetch(api.people + `?search=${query}` + `&page=${page}`);
  if (!res.ok) throw new Error(`Error fetching search`);
  const data = await res.json();
  localStorage.setItem('results', query);
  return data;
}

export const getPersonById = async (id: string) => {
  const res = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
  if (!res.ok) throw new Error(`Error fetching person ${id}`);
  const data: Person = await res.json();

  return {
    name: data.name,
    height: data.height,
    mass: data.mass,
    hairColor: data.hair_color,
    skinColor: data.skin_color,
    eyeColor: data.eye_color,
    gender: data.gender,
    birthYear: data.birth_year,
  };
};
