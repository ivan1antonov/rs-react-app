import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const valueSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    setValue: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
    clearValue: () => '',
  },
});

export const { setValue, clearValue } = valueSlice.actions;
export default valueSlice.reducer;
