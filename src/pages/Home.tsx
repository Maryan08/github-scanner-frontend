import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "../actions/repositoryActions";
import RepositoryTable from "../components/RepositoryTable";
import {GITHUB_TOKEN} from "../config";
import {AppDispatch} from "../store";

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchRepositories(GITHUB_TOKEN));
    }, [dispatch]);

    return (
        <div>
            <h1>Repository List</h1>
            <RepositoryTable />
        </div>
    );
};

export default Home;
