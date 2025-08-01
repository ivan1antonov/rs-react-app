import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { valueReducer } from './reducers/valueReducer';
import { shouldThrowReducer } from './reducers/shouldThrowReducer';
import { paginationReducer } from './reducers/paginationReducer';
import { loaderReducer } from './reducers/loaderReducer';
import { changeInputReducer } from './reducers/changeInputReducer';

const rootReducer = combineReducers({
  valueReducer,
  shouldThrowReducer,
  paginationReducer,
  loaderReducer,
  changeInputReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
