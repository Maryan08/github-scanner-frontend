import { configureStore } from "@reduxjs/toolkit";
import repositoryReducer from "../reducers/repositoryReducer";

export const store = configureStore({
    reducer: {
        repository: repositoryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;