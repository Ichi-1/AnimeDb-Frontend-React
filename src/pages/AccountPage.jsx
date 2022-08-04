import React, { useContext, useEffect } from 'react'
import AuthContext from 'components/Auth/context/AuthContext'


export const AccountPage = () => {
    const { authTokens } = useContext(AuthContext)

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/v1/animes/1/', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${String(authTokens.access)}`
            }
        })
        let data = await response.json()
    }

    return (
        <div>
            <h1>My Account</h1>
        </div>

    )
}
