import { useEffect } from 'react';
import { GithubLoginButton } from 'react-social-login-buttons'
import { getGitHubCode } from 'utils/getGithubUrl'
import { generateStateToken } from 'utils/stateTokenGenerator';
import { useContext } from 'react';
import AuthContext from 'context/AuthContext';

export const GitHub = () => {
    const { handleGitHubLogin } = useContext(AuthContext)

    useEffect(() => {
        const url = window.location.search
        const hasCode = url.includes("?code=")

        if (hasCode){
            // Getting code from query string
            const code = new URLSearchParams(url).get('code')
            // Then making POST request to our backend
            handleGitHubLogin(code)
        }   
    }, [])

    return (
        <GithubLoginButton
            iconSize='27px'
            style={{
                marginTop: 8,
                marginLeft: 0,
                width: '210px',
                fontSize: '14px',
                height: '40px',
                fontFamily: 'Consolas',
            }}
            text='Continue with GitHub'
            onClick={() => window.location = getGitHubCode(generateStateToken())}
        >
        </GithubLoginButton>
    )
}
