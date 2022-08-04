import { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode'
import AuthService from "../services/AuthService";

const AuthContext = createContext();
export default AuthContext


export const AuthProvider = ({ children }) => {

    const tokensInStorage = localStorage.getItem('JWT')
    const [authTokens, setAuthTokens] = useState(() =>
        tokensInStorage ? JSON.parse(tokensInStorage) : null
    )
    const [user, setUser] = useState(() =>
        tokensInStorage ? jwt_decode(tokensInStorage) : null
    )
    const [loading, setLoadgin] = useState(true)


    const loginUser = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const nickname = data.get('nickname')
        const password = data.get('password')
        
        const response = await AuthService.fetchLogin(nickname, password)
    
        
        if (response.status === 200) {
            let tokensPair = await response.json()
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

    const updateToken = async (event) => {
        console.log('Update token called');
        let response = await fetch('http://127.0.0.1:8000/api/v1/auth/jwt/refresh/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                "refresh": authTokens?.refresh
            })
        })

        if (response.status === 200) {
            let tokensPair = await response.json()
            setAuthTokens(tokensPair)
            setUser(jwt_decode(tokensPair.access))
            localStorage.setItem('JWT', JSON.stringify(tokensPair))

        } else {
            logoutUser()
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
    }

    useEffect(() => {
        if (loading) {
            updateToken()
        }

        const FOUR_MINUTES = 1000 * 60 * 4

        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, FOUR_MINUTES)
        return () => clearInterval(interval)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            { loading ? null : children }
        </AuthContext.Provider>
    )
}