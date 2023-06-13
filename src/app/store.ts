import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import issuesReducer from '../features/issues/issuesSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    issues: issuesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
