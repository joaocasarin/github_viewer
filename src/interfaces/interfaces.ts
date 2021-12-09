export interface RepoOwner {
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface ResponseData {
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    language: string;
    owner: RepoOwner;
}
