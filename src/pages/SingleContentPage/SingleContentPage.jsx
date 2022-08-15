import React, { useState} from 'react'
import { useParams } from 'react-router-dom'
import AnimeSerivce from 'api/AnimeService'
import { useFetch } from 'hooks/useFetch'
import { useEffect } from 'react'

export const SingleContentPage = () => {

    const { id } = useParams()
    const [content, setContent] = useState([])

    const [fetchSingle, isLoading, error ] = useFetch( async () => {
        const response = await AnimeSerivce.getByID(id)
        const data = response.data
        console.log(data)
        setContent(data)

    })
    
    useEffect(() => {
        fetchSingle()
    }, [id])

    return (
        <div>
            <h6>{content.title}</h6>
            <p>{content.description}</p>
        </div>
    )
}

