import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { valueReducer } from './reducers/valueReducer';
import { shouldThrowReducer } from './reducers/shouldThrowReducer';
import { paginationReducer } from './reducers/paginationReducer';
import { loaderReducer } from './reducers/loaderReducer';
import dataReducer from './reducers/dataReducer';
import { pageReducer } from './reducers/pageReducer';
import { selectReducer } from './reducers/selectReducer';
import { switcherReducer } from './reducers/switcherReducer';
import { starwarsApi } from './services/starwars';

const rootReducer = combineReducers({
  valueReducer,
  shouldThrowReducer,
  paginationReducer,
  loaderReducer,
  dataReducer,
  pageReducer,
  selectReducer,
  switcherReducer,
  [starwarsApi.reducerPath]: starwarsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(starwarsApi.middleware),
  });
};
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
