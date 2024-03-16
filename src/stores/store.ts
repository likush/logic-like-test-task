import {configureStore} from '@reduxjs/toolkit';
import {contentApi} from '../services/contentApi';
import filterReducer from '../features/filterSlice'

const store = configureStore({
    reducer: {
        filter: filterReducer,
        [contentApi.reducerPath]: contentApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(contentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

