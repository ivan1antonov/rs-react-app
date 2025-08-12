const SET_PAGE = 'SET_PAGE';

const initState = 1;

export const pageReducer = (state = initState, action: { type: string; payload: number }) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export const setPage = (newValue: number) => ({ type: SET_PAGE, payload: newValue });
