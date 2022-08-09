import React, { useEffect, useContext } from 'react'
// import AuthService from 'api/AuthService'
// import jwt_decode from 'jwt-decode'
import AuthContext from 'components/Auth/context/AuthContext'


export const GoogleButton = () => {
    const { handleGoogleResponse  } = useContext(AuthContext)
    
    /* global google */
    useEffect(() => {
        google.accounts.id.initialize({
            client_id:'147313732364-8asvecsn21coga31elgb58qo5pgbhape.apps.googleusercontent.com',
            callback:handleGoogleResponse,
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: "outline", size:'large'}
        )
    }, [])
   

    return (
        <div>
            <div id="signInDiv"></div>
        </div>
        
    )
}



    
