import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Repository } from "../types/repositoryTypes";
import {fetchRepositoryDetails} from "../actions/repositoryActions";
import {AppDispatch, RootState} from "../store";
import {GITHUB_TOKEN} from "../config";

const RepositoryTable = () => {
    const dispatch = useDispatch<AppDispatch>();

    const repositories = useSelector((state: RootState) => state.repository.repositories);
    const loading = useSelector((state: RootState) => state.repository.loading);

    const handleRowClick = (owner: string, repo: string) => {
        dispatch(fetchRepositoryDetails(owner, repo, GITHUB_TOKEN!));
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Repositories List</h2>
            <table className="repository-table">
                <thead>
                <tr>
                    <th>Repo Name</th>
                    <th>Size</th>
                    <th>Owner</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {repositories.map((repo: Repository) => (
                    <tr key={repo.name} onClick={() => handleRowClick(repo.owner, repo.name)}>
                        <td>{repo.name}</td>
                        <td>{repo.size} KB</td>
                        <td>{repo.owner}</td>
                        <td>
                            <Link to={`/repository-details/${repo.owner}/${repo.name}`}>
                                <button className="btn-show-details">Show Details</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RepositoryTable;
