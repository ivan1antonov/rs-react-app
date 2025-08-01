const SET_INPUT = 'SET_INPUT';

const initState = {
  input: '',
};

export const changeInputReducer = (
  state = initState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};

export const changeInputValue = (newValueInput: string) => ({
  type: SET_INPUT,
  payload: newValueInput,
});
