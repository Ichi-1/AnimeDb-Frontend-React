import React, { useState, useEffect, useRef } from 'react'
import styles from './AnimeSearchPage.module.css'
import Typography from '@mui/material/Typography';
import { FilterBox } from 'components/UI/FilterBox/FilterBox';
import AnimeSerivce from 'api/AnimeService';
import { ItemCard } from 'components/UI/BooststrapCard/Card';
import { Pagination } from '@mui/material';
import { useFetch } from 'hooks/useFetch'
import { useObserver } from 'hooks/useObserver';


export const AnimeSearchPage = () => {
    const [queryResult, setQueryResult] = useState([])
    const [totalPages, setTotalPages] = useState()
    const [page, setPage] = useState(1)

    const [fetchShow, isLoading, error] = useFetch(async () => {
        const response = await AnimeSerivce.getList(page)
        setTotalPages(response.data['x-total-count'])
        setQueryResult([...queryResult, ...response.data.result])
    })

    
    useEffect(() => {
        fetchShow()
    }, [page])
    
    
    
    const lastElement = useRef()
    useObserver(lastElement, (page < totalPages), isLoading, () => {
        setPage(page + 1)
    })
    
    
    
    // const handlePagination = (event, value) => {
    //     setPage(value)
    // }
    
    return (
        <div>
            <div className={styles.header}>
                <Typography component="h3" variant="h7">
                    Anime
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    This page displays anime sorted by average rating
                </Typography>
                {/* <Pagination
                    page={page}
                    count={totalPages}
                    onChange={handlePagination}
                /> */}

            </div>

            <div className={styles.contentBlock}>
                <div className={styles.content}>
                    {queryResult.map(show => {
                        if (show.title.length > 'Fullmetal Alchemist'.length) {
                            show.title = show.title.slice(0, 'Fullmetal Alchemist'.length) + '...'
                        }
                        return <ItemCard
                            key={show.id}
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

            <div ref={lastElement}></div>
        </div>
    )
}
