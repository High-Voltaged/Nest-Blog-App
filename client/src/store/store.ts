import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './api/api-slice';

export const store = configureStore({
  reducer: combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
  }),
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({}).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
