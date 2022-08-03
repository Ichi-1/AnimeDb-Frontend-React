import React from 'react'
import { Route, Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
    console.log('This Is PrivateRoute')
   
    return <Navigate to="/login"/>
   
}