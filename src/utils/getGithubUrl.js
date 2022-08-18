export function getGitHubCode (stateToken) {
    const rootURl = 'https://github.com/login/oauth/authorize';

    const options = {
        client_id: process.env.REACT_APP_GITHUB_OAUTH_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_GITHUB_OAUTH_REDIRECT_URL,
        scope: 'user',
        state: stateToken,
    };

    const qs = new URLSearchParams(options);
    const GitHubAuthURL = `${rootURl}?${qs.toString()}`

    return GitHubAuthURL
}


