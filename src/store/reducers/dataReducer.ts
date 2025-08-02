import type { resultsType } from '../../types/types';
export type DataState = resultsType[];

const SET_DATA = 'SET_DATA';
const initState: DataState = [];

export const dataReducer = (
  state: DataState = initState,
  action: { type: string; payload: DataState }
): DataState => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const setData = (data: resultsType[]) => ({
  type: SET_DATA,
  payload: data,
});
