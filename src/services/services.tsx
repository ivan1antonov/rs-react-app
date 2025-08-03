const api = {
  people: 'https://akabab.github.io/starwars-api/api/all.json',
  planets: 'https://swapi.py4e.com/api/planets/',
  films: 'https://swapi.py4e.com/api/films/',
  species: 'https://swapi.py4e.com/api/species/',
  vehicles: 'https://swapi.py4e.com/api/vehicles/',
  starships: 'https://swapi.py4e.com/api/starships/',
};

export async function getResults(query: string) {
  const response = await fetch(api.people);
  const data = await response.json();
  localStorage.setItem('results', query);
  // console.log(data);
  return data;
}
