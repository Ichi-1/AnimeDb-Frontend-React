import { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import AuthService from "api/AuthService";

const AuthContext = createContext();
export default AuthContext

//TODO I need to totally rewrite this auth module, 
//* because now this code send two request for each token function,
//* Also - github oauth2 trouble, if i will verify backend token 
//* It always will be blacklisted

export const AuthProvider = ({ children }) => {

    const tokensInStorage = localStorage.getItem('JWT')
    const [loading, setLoadgin] = useState(true)
    const [authTokens, setAuthTokens] = useState(() =>
        tokensInStorage ? JSON.parse(tokensInStorage) : null
    )
    const [user, setUser] = useState(() =>
        tokensInStorage ? jwt_decode(tokensInStorage) : null
    )

    const loginUser = async (event) => {
        console.log('Login User called')
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const nickname = data.get('nickname')
        const password = data.get('password')
        const response = await AuthService.userLogin(nickname, password)
        let tokensPair = await response.json()

        if (response.status === 200) {
            setAuthTokens(tokensPair)
            setUser(jwt_decode(tokensPair.access))
            localStorage.setItem('JWT', JSON.stringify(tokensPair))

        } else {
            alert(response.status)
        }

    };

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('JWT')
        
    }

    const verifyToken = async (token) => {
        console.log('Verification called')
        const response = await AuthService.verifyToken(token)
        if (response.status === 401) {
            return true
        }
    }   

    const updateToken = async () => {
        console.log('Update token called');
        const refreshToken = authTokens?.refresh
        const isTokenBlackListed = await verifyToken(refreshToken)

        // TODO Commented out right now, cause - two consecutive requests 
        // if (isTokenBlackListed) {
        //     console.log('Token is BlakListed')
        //     logoutUser()
        // }
        
        const response = await AuthService.updateAccessToken(refreshToken)
        if (response.status === 200) {
            let tokensPair = await response.json()
            setAuthTokens(tokensPair)
            setUser(jwt_decode(tokensPair.access))
            localStorage.setItem('JWT', JSON.stringify(tokensPair))
        }   
        
        if (loading) {
            setLoadgin(false)
        }
    }


    const handleGoogleLogin = async (googleResponse) => {
        const id_token = await googleResponse.credential
        console.log(id_token)
        const response = await AuthService.googleAuth(id_token)
        const data = await response.json()

        if (response.status === 201) {
            setAuthTokens(data.tokens)
            localStorage.setItem('JWT', JSON.stringify(data.tokens))
            window.location.reload()
        } else {
            alert(response.status)
        }

    }
    

    const handleGitHubLogin = async (code) => {
        const response = await AuthService.githubAuth(code)
        const data = await response.json()
        
        if (response.status !== 201) {
            alert(`status: ${response.status}, ${JSON.stringify(data)}`)
            return
        };
        
        setAuthTokens(data.tokens)
        localStorage.setItem('JWT', JSON.stringify(data.tokens))

        alert(`status: ${response.status}`)
        window.location.reload()
        
    }
    
    useEffect(() => {
        const FOUR_MINUTES = 1000 * 60 * 4
        if (loading) updateToken();
        
        let interval = setInterval(() => {
            if (authTokens) updateToken()
        }, FOUR_MINUTES);

        return () => clearInterval(interval)

    }, [authTokens, loading])
    
    
    const contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        authTokens: authTokens,
        handleGoogleLogin: handleGoogleLogin,
        handleGitHubLogin: handleGitHubLogin,

    }

    return (
        <AuthContext.Provider value={contextData}>
            { loading ? null : children }
        </AuthContext.Provider>
    )
}
