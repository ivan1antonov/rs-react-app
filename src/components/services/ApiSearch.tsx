export default async function getPeople(search?: string, page?: string) {
  const url = search
    ? `https://www.swapi.tech/api/people/`
    : `https://www.swapi.tech/api/people/?search=${search}&page=${page ?? 1}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}
