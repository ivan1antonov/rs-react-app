const TOGGLE_THEME = 'TOGGLE_THEME';

const initState = {
  isDark: true,
};

export const switcherReducer = (state = initState, action: { type: string }) => {
  console.log(state);
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

export const toggleTheme = () => ({ type: TOGGLE_THEME });
