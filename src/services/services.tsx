const api = {
  people: 'https://www.swapi.tech/api/people',
  alternative: 'https://swapi.py4e.com/api/people',
  withImage: 'https://akabab.github.io/starwars-api/',
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
    console.log(data);
    return data;
  }
}
