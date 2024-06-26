import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

export const store = configureStore({ reducer: reducers, middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }) })
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;