const api = {
  people: 'https://swapi.dev/api/people/',
  planets: 'https://swapi.dev/api/planets/',
  films: 'https://swapi.dev/api/films/',
  species: 'https://swapi.dev/api/species/',
  vehicles: 'https://swapi.dev/api/vehicles/',
  starships: 'https://swapi.dev/api/starships/',
};

export async function getResults(query: string) {
  const response = await fetch(api.people + `?search=${query}`);
  const data = await response.json();
  localStorage.setItem('results', query);
  return data;
}
