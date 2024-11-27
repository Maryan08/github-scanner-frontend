import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchRepositoryDetails} from "../actions/repositoryActions";
import {AppDispatch, RootState} from "../store";
import {GITHUB_TOKEN} from "../config";

const RepositoryDetails: React.FC = () => {
    const { owner, repo } = useParams<{ owner: string; repo: string }>();
    const dispatch = useDispatch<AppDispatch>();

    const repository = useSelector((state: RootState) => state.repository.repositoryDetails);
    const loading = useSelector((state: RootState) => state.repository.loading);

    useEffect(() => {
        if (owner && repo) {
            dispatch(fetchRepositoryDetails(owner, repo, GITHUB_TOKEN!)); // Dispatch action to fetch repository details
        }
    }, [dispatch, owner, repo]);

    if (loading) return <div>Loading...</div>;
    if (!repository) return <div>No details available</div>;

    return (
        <div>
            <h2>{repository.name}</h2>
            <p><strong>Owner:</strong> {repository.owner}</p>
            <p><strong>Size:</strong> {repository.size} KB</p>
            <p><strong>Private:</strong> {repository.private ? "Yes" : "No"}</p>
        </div>
    );
};

export default RepositoryDetails;
