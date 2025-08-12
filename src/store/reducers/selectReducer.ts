const ADD_SELECT = 'ADD_SELECT';
const REMOVE_SELECT = 'REMOVE_SELECT';
const CLEAR_SELECT = 'CLEAR_SELECT';

export type SelectedItem = {
  id: number;
  name: string;
  height: string;
  mass: string;
};

export type SelectState = {
  items: SelectedItem[];
};
type SelectAction =
  | { type: typeof ADD_SELECT; payload: SelectedItem }
  | { type: typeof REMOVE_SELECT; payload: SelectedItem }
  | { type: typeof CLEAR_SELECT };

const initState: SelectState = {
  items: [],
};

export const selectReducer = (
  state: SelectState = initState,
  action: SelectAction
): SelectState => {
  switch (action.type) {
    case ADD_SELECT:
      if (state.items.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_SELECT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case CLEAR_SELECT:
      return initState;

    default:
      return state;
  }
};

export const addSelect = (item: SelectedItem) => ({
  type: ADD_SELECT,
  payload: item,
});

export const removeSelect = (item: SelectedItem) => ({
  type: REMOVE_SELECT,
  payload: item,
});

export const clearSelect = () => ({
  type: CLEAR_SELECT,
  payload: initState,
});
