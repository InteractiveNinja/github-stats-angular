export interface User {
  login: string;
  name?: string;
  bio?: string;
  followers: number;
  location?: string;
  avatar_url: string;
  following: number;
  public_repos: number;
  twitter_username?: string;
}
