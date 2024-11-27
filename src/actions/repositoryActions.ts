import { setRepositories, setRepositoryDetails, setLoading, setError } from "../reducers/repositoryReducer";
import { AppDispatch } from "../store";
import axios from "axios";
import {API_URL} from "../config";

export const fetchRepositories = (developerToken: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post(API_URL, {
            query: `
        query {
          listRepositories(developerToken: "${developerToken}") {
            name
            size
            owner
          }
        }
      `
        });

        dispatch(setRepositories(response.data.data.listRepositories));
    } catch (error) {
        dispatch(setError("Failed to fetch repositories"));
    } finally {
        dispatch(setLoading(false));
    }
};

export const fetchRepositoryDetails = (userName: string, repoName: string, developerToken: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post(API_URL, {
            query: `
        query {
          repositoryDetails(developerToken: "${developerToken}", userName: "${userName}", repoName: "${repoName}") {
            name
            size
            owner
            isPrivate
          }
        }
      `,
        });

        dispatch(setRepositoryDetails(response.data.data.repositoryDetails));
    } catch (error) {
        dispatch(setError("Failed to fetch repository details"));
    } finally {
        dispatch(setLoading(false));
    }
};