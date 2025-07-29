const api = {
  people: 'https://swapi.py4e.com/api/people/',
  planets: 'https://swapi.py4e.com/api/planets/',
  films: 'https://swapi.py4e.com/api/films/',
  species: 'https://swapi.py4e.com/api/species/',
  vehicles: 'https://swapi.py4e.com/api/vehicles/',
  starships: 'https://swapi.py4e.com/api/starships/',
};

export async function getResults(query: string, page: number = 1) {
  const response = await fetch(api.people + `?search=${query}` + `&page=${page}`);
  const data = await response.json();
  localStorage.setItem('results', query);
  console.log(data);
  return data;
}
