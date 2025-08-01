const SET_SHOULDTHROW = 'SET_SHOULDTHROW';
const TOGGLE_SHOULDTHROW = 'TOGGLE_SHOULDTHROW';

const initState = {
  shouldThrow: false,
};

export const shouldThrowReducer = (state = initState, action: { type: string }) => {
  switch (action.type) {
    case SET_SHOULDTHROW:
      return {
        ...state,
        shouldThrow: true,
      };
    case TOGGLE_SHOULDTHROW:
      return {
        ...state,
        shouldThrow: !state.shouldThrow,
      };
    default:
      return state;
  }
};

export const createShouldThrow = () => ({ type: SET_SHOULDTHROW });

export const toggleLoader = () => ({ type: TOGGLE_SHOULDTHROW });
