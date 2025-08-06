export type Item = {
  id: number;
  name: string;
  height: string;
  mass: string;
  image: string;
};

export type DataState = Item[];
export type SelectedItem = Omit<Item, 'image'>;

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

export const setData = (data: DataState) => ({
  type: SET_DATA,
  payload: data,
});
