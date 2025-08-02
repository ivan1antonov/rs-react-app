import { createAsyncThunk } from '@reduxjs/toolkit';
import { getResults } from '../../services/services';
import { setPagination } from '../reducers/paginationReducer';
import { setData } from '../reducers/dataReducer';
import { showLoader, toggleLoader } from '../reducers/loaderReducer';

export const fetchResultsThunk = createAsyncThunk(
  'search/fetchResults',
  async ({ query, page }: { query: string; page?: number }, { dispatch }) => {
    dispatch(showLoader);
    try {
      const response = await getResults(query, page ?? 1);

      dispatch(setData(response.results));
      dispatch(setPagination(Math.ceil(response.count / 10)));
      localStorage.setItem('results', query);
    } catch (e) {
      console.error('Error into data responce: ', e);
    } finally {
      dispatch(toggleLoader);
    }
  }
);
