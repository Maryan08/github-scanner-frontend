import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repository, RepositoryState } from "../types/repositoryTypes";

const initialState: RepositoryState = {
    repositories: [],
    repositoryDetails: null,
    loading: false,
    error: null,
};

const repositorySlice = createSlice({
    name: "repository",
    initialState,
    reducers: {
        setRepositories: (state, action: PayloadAction<Repository[]>) => {
            state.repositories = action.payload;
        },
        setRepositoryDetails: (state, action: PayloadAction<Repository | null>) => {
            state.repositoryDetails = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setRepositories, setRepositoryDetails, setLoading, setError } = repositorySlice.actions;

export default repositorySlice.reducer;
