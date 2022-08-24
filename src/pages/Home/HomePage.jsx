import React, { useState, useEffect } from 'react'
import { PanelWithLink } from 'components/UI/Panel/Panel';
import styled from "styled-components"
import { useFetch } from 'hooks/useFetch';
import AnimeSerivce from 'api/AnimeService';
import { BeatLoader } from 'react-spinners';
import { ItemCard } from 'components/Hits/ItemCard';

const Header = styled.div`
    margin-top: 10px;
    width:95%;
    height: 350px;

    border: 2px solid red;
`;


export const HomePage = () => {
    const [content, setContent] = useState([])
    const [fetchContent, isLoading, error] = useFetch(async () => {
        const response = await AnimeSerivce.getList()
        setContent(response.data.result)
    })

    useEffect(() => {
        fetchContent()
    }, [])

    return (
        <>
        <div className='container-fluid anime-list'>
            <div className='row'>
                <PanelWithLink title="Top Rated Anime" />
                <>{content.map(show => {
                    return <ItemCard
                        title={show.title}
                        poster_image={show.poster_image}
                        kind={show.studio}
                    
                    />
                })}    
                </>
            </div>
        </div>
            
        </>
    )
}

