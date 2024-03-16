import store from '../stores/store';

export type Course = {
    bgColor: string;
    image: string;
    name: string;
    id: string;
    tags: string[];
}

export type CourseTag = string | null;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
