import React, { useState, useEffect } from 'react'
import styles from './AnimeSearchPage.module.css'
import Typography from '@mui/material/Typography';
import { BasicPagination } from 'components/UI/Pagination/Pagination';
import { FilterBox } from 'components/UI/FilterBox/FilterBox';
import { useFetch } from 'hooks/useFetch'
import AnimeSerivce from 'api/AnimeService';
import { SearchPageItem } from 'components/Anime/SearchPageItem';

import { ItemCard } from 'components/UI/BooststrapCard/Card';


export const AnimeSearchPage = () => {
    const [queryResult, setQueryResult] = useState([])

    const [fetchShow, isLoading, error] = useFetch(async (page) => {
        const response = await AnimeSerivce.getList()
        const result = response.data.result
        console.log(result)

        setQueryResult(result)

    })

    useEffect(() => {
        fetchShow()
    }, [])


    return (
        <div>
            <div className={styles.header}>
                <Typography component="h3" variant="h7">
                    Anime
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    This page displays anime sorted by average rating
                </Typography>
                <BasicPagination />
            </div>

            <div className={styles.contentBlock}>
                <div className={styles.content}>
                {queryResult.map(show => {
                    if (show.title.length > 'Fullmetal Alchemist'.length) {
                        show.title = show.title.slice(0, 'Fullmetal Alchemist'.length) + '...'
                    }

                    return <ItemCard
                    poster={show.poster_image}
                    title={show.title}
                    kind={show.kind.charAt(0).toUpperCase() + show.kind.slice(1)}

                    
                    />
                })}

                
                </div>


                <div className={styles.sideBar}>
                    <FilterBox />
                </div>
            </div>

        </div>
    )
}
