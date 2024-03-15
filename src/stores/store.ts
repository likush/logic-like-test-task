import {configureStore} from '@reduxjs/toolkit';
import {contentApi} from '../services/contentApi';

const store = configureStore({
    reducer: {
        [contentApi.reducerPath]: contentApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(contentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

