const SET_PAGINATION = 'SET_PAGINATION';
const CLEAR_PAGINATION = 'CLEAR_PAGINATION';

const initState = {
  pagination: 0,
};

export const paginationReducer = (state = initState, action: { type: string; payload: string }) => {
  switch (action.type) {
    case 'SET_PAGINATION':
      return {
        ...state,
        pagination: action.payload,
      };
    case 'CLEAR_PAGINATION':
      return {
        ...state,
        pagination: 0,
      };
    default:
      return;
  }
};

export const setPagination = (pagionation: number) => ({
  type: SET_PAGINATION,
  payload: pagionation,
});

export const clearPagination = () => ({
  type: CLEAR_PAGINATION,
  payload: 0,
});
