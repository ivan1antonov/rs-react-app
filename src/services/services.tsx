const SWAPI_BASE_URL = 'https://swapi.py4e.com/api/';

export const getResults = async (search: string) => {
  const url = new URL('people/', SWAPI_BASE_URL);
  url.search = new URLSearchParams({ search }).toString();

  try {
    const response = await fetch(url.toString());
    const data = await response.json();
    localStorage.setItem('results', search);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
