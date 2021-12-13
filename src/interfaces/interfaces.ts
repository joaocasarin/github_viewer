export interface User {
    login: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
}

export interface UserRepo {
    name: string;
    full_name: string;
    html_url: string;
    language: string;
}
