import React, { useEffect, useContext } from 'react'
import AuthContext from 'context/AuthContext'


export const Google = () => {
    const { handleGoogleLogin  } = useContext(AuthContext)
    
    /* global google */
    useEffect(() => {
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleGoogleLogin,
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: "filled_blue", size:'large', shape:'square', text:'continue_with'}
        )
    }, [])
   

    return (
        <div >
            <div id="signInDiv"></div>
        </div>
        
    )
}



    
