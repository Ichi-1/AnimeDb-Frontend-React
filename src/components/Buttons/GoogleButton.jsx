import React, { useEffect } from 'react'
import AuthService from 'api/AuthService'
import { AuthProvider } from 'components/Auth/context/AuthContext'

export const GoogleButton = () => {

    const handleCallbackResponse = async (response) => {
        const id_token = await response.credential
        console.log(id_token)
        const backend_response = await AuthService.googleAuth(id_token)
        
        const data = await backend_response.json()
        console.log(data)
    }

    

    /* global google */
    useEffect(() => {
        google.accounts.id.initialize({
            client_id:'147313732364-8asvecsn21coga31elgb58qo5pgbhape.apps.googleusercontent.com',
            callback:handleCallbackResponse,
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: "outline", size:'large'}
        )
    }, [])
   

    return (
        <div>
            <div fullWidht id="signInDiv"></div>
        </div>
        
    )
}



    
