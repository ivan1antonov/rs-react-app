// import { createAsyncThunk } from '@reduxjs/toolkit';
// // import { getResults } from '../../services/services';
// import { setPagination } from '../reducers/paginationReducer';
// import { setData } from '../reducers/dataReducer';
// import { showLoader, toggleLoader } from '../reducers/loaderReducer';

// const api = {
//   people: 'https://www.swapi.tech/api/people',
//   // people: 'https://akabab.github.io/starwars-api/',
// };

// async function getResults(query: string) {
//   let request;
//   if (!isNaN(Number(query))) {
//     request = api.people + 'id/' + query + '.json';
//   } else {
//     request = api.people + query + '.json';
//   }
//   if (request) {
//     const response = await fetch(request);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   }
// }

// export const fetchResultsThunk = createAsyncThunk(
//   'search/fetchResults',
//   async ({ query }: { query: string }, { dispatch }) => {
//     dispatch(showLoader());
//     try {
//       const response = await getResults(query);
//       dispatch(setData(response));
//       dispatch(setPagination(Math.ceil(response.length / 10)));
//     } catch (e) {
//       console.error('Error into data responce: ', e);
//     } finally {
//       dispatch(toggleLoader());
//     }
//   }
// );
