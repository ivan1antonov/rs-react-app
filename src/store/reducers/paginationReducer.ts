const SET_PAGINATION = 'SET_PAGINATION';
const CLEAR_PAGINATION = 'CLEAR_PAGINATION';

interface SetPaginationAction {
  type: typeof SET_PAGINATION;
  payload: number;
}

interface ClearPaginationAction {
  type: typeof CLEAR_PAGINATION;
  payload: number;
}

type PaginationAction = SetPaginationAction | ClearPaginationAction;
export interface PaginationState {
  pagination: number;
}

const initState: PaginationState = {
  pagination: 0,
};

export const paginationReducer = (
  state: PaginationState = initState,
  action: PaginationAction
): PaginationState => {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    case CLEAR_PAGINATION:
      return {
        ...state,
        pagination: 0,
      };
    default:
      return state;
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
