import { createAsyncThunk } from '@reduxjs/toolkit';
import { getResults } from '../../services/services';
import { setPagination } from '../reducers/paginationReducer';
import { setData } from '../reducers/dataReducer';
import { showLoader, toggleLoader } from '../reducers/loaderReducer';

export const fetchResultsThunk = createAsyncThunk(
  'search/fetchResults',
  async ({ query }: { query: string }, { dispatch }) => {
    dispatch(showLoader());
    try {
      // console.log('query: ', query);
      const response = await getResults(query);
      dispatch(setData(response));
      dispatch(setPagination(Math.ceil(response.length / 10)));
      // localStorage.setItem('results', query);
    } catch (e) {
      console.error('Error into data responce: ', e);
    } finally {
      dispatch(toggleLoader());
    }
  }
);
