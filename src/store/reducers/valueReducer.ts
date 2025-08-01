const SET_VALUE = 'SET_VALUE';
const CLEAR_VALUE = 'CLEAR_VALUE';

const initState = {
  value: '',
};

export const valueReducer = (state = initState, action: { type: string; payload?: string }) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case CLEAR_VALUE:
      return {
        ...state,
        value: '',
      };
    default:
      return state;
  }
};

export const setValue = (newValue: string) => ({ type: SET_VALUE, payload: newValue });

export const clearValue = () => ({ type: SET_VALUE, payload: '' });
