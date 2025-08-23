const SWAPI_BASE_URL = 'https://swapi.py4e.com/api/people/';

type GetPeopleParams = {
  query: string;
};

export const getResults = async (params: GetPeopleParams) => {
  const url = new URL('/people', SWAPI_BASE_URL);
  url.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem('results', params.query);

    return data;
  } catch (error) {
    console.error(error);
  }
};
