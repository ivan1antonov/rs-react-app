import { showLoader, toggleLoader } from '../reducers/loaderReducer';
import { setPagination, clearPagination } from '../reducers/paginationReducer';
import { createShouldThrow, toggleShouldThrow } from '../reducers/shouldThrowReducer';
import { setValue, clearValue } from '../reducers/valueReducer';
import { addSelect, removeSelect, clearSelect } from '../reducers/selectReducer';
import { toggleTheme } from '../reducers/switcherReducer';

import type { AppDispatch } from '..';
import type { SelectedItem } from '../reducers/selectReducer';
import { setPage } from '../reducers/pageReducer';
export type CallActionReturn = ReturnType<typeof callAction>;

export const callAction = (dispatch: AppDispatch) => ({
  showLoader: () => dispatch(showLoader()),
  toggleLoader: () => dispatch(toggleLoader()),
  setPagination: (val: number) => dispatch(setPagination(val)),
  clearPagination: () => dispatch(clearPagination()),
  createShouldThrow: () => dispatch(createShouldThrow()),
  toggleShouldThrow: () => dispatch(toggleShouldThrow()),
  setValue: (val: string) => dispatch(setValue(val)),
  clearValue: () => dispatch(clearValue()),
  setPage: (val: number) => dispatch(setPage(val)),
  addSelect: (item: SelectedItem) => dispatch(addSelect(item)),
  removeSelect: (item: SelectedItem) => dispatch(removeSelect(item)),
  clearSelect: () => dispatch(clearSelect()),
  toggleTheme: () => dispatch(toggleTheme()),
});
