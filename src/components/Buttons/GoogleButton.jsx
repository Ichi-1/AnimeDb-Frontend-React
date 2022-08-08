import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode';

export const GoogleButton = () => {

    const handleCallbackResponse = (response) => {
        const userObj = jwt_decode(response.credential)
        console.log(userObj)
    }

    /* global google */
    useEffect(() => {
        google.accounts.id.initialize({
            client_id:'147313732364-8asvecsn21coga31elgb58qo5pgbhape.apps.googleusercontent.com',
            callback:handleCallbackResponse
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



    
