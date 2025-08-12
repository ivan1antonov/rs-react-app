const SET_LOADER = 'SET_LOADER';
const TOGGLE_LOADER = 'TOGGLE_LOADER';

const initState = {
  isLoader: false,
};

export const loaderReducer = (state = initState, action: { type: string }) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        isLoader: true,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoader: !state.isLoader,
      };
    default:
      return state;
  }
};

export const showLoader = () => ({ type: SET_LOADER });

export const toggleLoader = () => ({ type: TOGGLE_LOADER });
