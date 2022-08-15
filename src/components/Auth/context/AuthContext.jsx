import { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import AuthService from "api/AuthService";

const AuthContext = createContext();
export default AuthContext

export const AuthProvider = ({ children }) => {

    const [loading, setLoadgin] = useState(true)
    const tokensInStorage = localStorage.getItem('JWT')
    const [authTokens, setAuthTokens] = useState(() =>
        tokensInStorage ? JSON.parse(tokensInStorage) : null
    )
    const [user, setUser] = useState(() =>
        tokensInStorage ? jwt_decode(tokensInStorage) : null
    )


    const handleGoogleResponse = async (response) => {
        const id_token = await response.credential
        console.log(id_token)
        const backend_response = await AuthService.googleAuth(id_token)
        const data = await backend_response.json()

        if (backend_response.status === 201) {
            setAuthTokens(data.tokens)
            localStorage.setItem('JWT', JSON.stringify(data.tokens))
            window.location.reload()
        } else {
            console.log(backend_response.status)
        }

        const profile_picture = jwt_decode(id_token).picture
    }
    
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
            alert('Something wrong')
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

        if (isTokenBlackListed) {
            console.log('Token is BlakListed')
            logoutUser()
        }

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

    const contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        authTokens: authTokens,
        handleGoogleResponse: handleGoogleResponse,
    }

    useEffect(() => {
        const FOUR_MINUTES = 1000 * 60 * 4
        if (loading) updateToken()
        
        let interval = setInterval(() => {
            if (authTokens) updateToken()
        }, FOUR_MINUTES)

        return () => clearInterval(interval)

    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            { loading ? null : children }
        </AuthContext.Provider>
    )
}