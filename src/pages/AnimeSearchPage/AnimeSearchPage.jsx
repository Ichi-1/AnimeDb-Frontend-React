import 'styles/AlgoliaComponents.css'
import React from 'react'
import styles from './AnimeSearchPage.module.css'
import Typography from '@mui/material/Typography';
import algoliasearch from 'algoliasearch';
import {
    InstantSearch,
    SearchBox,
    RefinementList,
} from 'react-instantsearch-hooks-web';

import { InfiniteHits } from '../../components/UI/Hits/InfiniteHits';
import { FilterHeader } from 'components/UI/Filters/FilterHeader';


export const AnimeSearchPage = (props) => {
    const searchClient = algoliasearch('RI9Z4GP5QW', 'a5c554987a0453cf6fbcd3c691f8afa7')

    return (
        <div>
            <InstantSearch searchClient={searchClient} indexName="anidb_Anime"  >

                <div className={styles.header}>

                    <Typography component="h3" variant="h7">
                        Anime
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        This page displays anime sorted by average rating
                    </Typography>

                </div>
                <div className={styles.body}>
                    <div className={styles.content}>
                            <InfiniteHits />
                    </div>

                    <div className={styles.sidebar}>
                        <SearchBox placeholder='Search...' />

                        <div className={styles.filterContainer}>

                            <FilterHeader title={'Show Type'} />
                            <RefinementList attribute='kind' />

                            <FilterHeader title={'Studio'} />
                            <RefinementList attribute='studio' />


                        </div>

                    </div>

                </div>

            </InstantSearch>
        </div>

    )
}