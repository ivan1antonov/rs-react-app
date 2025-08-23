import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchData: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
    clearData: () => '',
  },
});

export const { searchData, clearData } = searchSlice.actions;
export default searchSlice.reducer;
