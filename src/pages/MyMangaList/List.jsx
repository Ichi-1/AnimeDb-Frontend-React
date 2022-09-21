import React from 'react'
import { useParams } from 'react-router-dom'

export const MyAnimeList = () => {
    const { id } = useParams()

    return (
        <div>MyAnimeList user#{id}</div>
    )
}
