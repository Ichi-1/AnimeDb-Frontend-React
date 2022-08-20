import React from 'react'
import { useParams } from 'react-router-dom'

export const UserProfile = () => {
    const { id } = useParams()

  return (
    <div style={{marginTop:'55px'}}>
        <h1>Public Profile owned by user with ID {id}</h1>
    </div>
  )
}
