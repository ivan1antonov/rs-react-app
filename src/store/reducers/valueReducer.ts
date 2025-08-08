import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const dataSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    setValue: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
    clearValue: () => '',
    searchValue: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setValue, clearValue, searchValue } = dataSlice.actions;
export default dataSlice.reducer;
