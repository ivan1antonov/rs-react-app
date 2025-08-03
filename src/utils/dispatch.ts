import { showLoader, toggleLoader } from '../store/reducers/loaderReducer';
import { setPagination, clearPagination } from '../store/reducers/paginationReducer';
import { createShouldThrow, toggleShouldThrow } from '../store/reducers/shouldThrowReducer';
import { setValue, clearValue } from '../store/reducers/valueReducer';

import type { AppDispatch } from '../store';
import { setPage } from '../store/reducers/pageReducer';

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
});
