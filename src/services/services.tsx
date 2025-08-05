const api = {
  people: 'https://akabab.github.io/starwars-api/api/',
  planets: 'https://swapi.py4e.com/api/planets/',
  films: 'https://swapi.py4e.com/api/films/',
  species: 'https://swapi.py4e.com/api/species/',
  vehicles: 'https://swapi.py4e.com/api/vehicles/',
  starships: 'https://swapi.py4e.com/api/starships/',
};

export async function getResults(query: string) {
  let request;
  if (!isNaN(Number(query))) {
    request = api.people + 'id/' + query + '.json';
  } else {
    request = api.people + query + '.json';
  }
  if (request) {
    const response = await fetch(request);
    const data = await response.json();
    // localStorage.setItem('results', query);
    // console.log(data);
    return data;
  }
}
