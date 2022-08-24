import React from 'react'
import { useParams } from 'react-router-dom'

export const SetPassword = () => {
    const { id } = useParams()
    return (
        <div>SetPassword</div>
    )
}


export const SetNickname = () => {
    const { id } = useParams()
    return (
        <div>SetNickname</div>
    )
}
