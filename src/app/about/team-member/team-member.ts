export class TeamMember {

    Name: string;
    Title: string;
    Description: string;
    Github: string;
    GithubId: string;
    QueUp: string;
    Twitter: string;

    constructor(name?: string, title?: string, description?: string, github?: string, githubId?: string, queup?: string, twitter?: string) {
        this.Name = name;
        this.Title = title;
        this.Description = description;
        this.Github = github;
        this.GithubId = githubId;
        this.QueUp = queup;
        this.Twitter = twitter;
    }
}
