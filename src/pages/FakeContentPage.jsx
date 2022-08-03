import React from 'react'
import { Navigate } from "react-router-dom"

const FakeContentPage = ({children, ...props }) => {
    const auth = false
    console.log('This Is PrivateRoute')
    return (
        <div>
            {auth 
                ? <h1>Content for Autenticated Users</h1>
                : <Navigate to="/sign_in"/>
            }
            
        </div>
            
    )
}

export default FakeContentPage