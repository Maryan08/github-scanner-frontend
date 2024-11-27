export interface Repository {
    name: string;
    size: number;
    owner: string;
    private: boolean;
}

export interface RepositoryState {
    repositories: Repository[];
    repositoryDetails: Repository | null;
    loading: boolean;
    error: string | null;
}
