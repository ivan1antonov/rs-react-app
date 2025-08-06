const api = {
  people: 'https://akabab.github.io/starwars-api/api/',
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
    return data;
  }
}
