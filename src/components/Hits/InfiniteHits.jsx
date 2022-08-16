import React, { useEffect, useRef, useState } from 'react';
import { useInfiniteHits } from 'react-instantsearch-hooks-web';
import { ItemCard } from 'components/Hits/ItemCard';
import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';

import StyledLink from '../UI/Link/StyledLink';

const LoadingWrapper = styled.div`
    min-width: 42vw;
    align-items: center;
    
`;

export function InfiniteHits(props) {
    const { hits, isLastPage, showMore, results } = useInfiniteHits(props);
    const [isLoading, setLoading] = useState(true);
    const sentinelRef = useRef(null);


    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [results.page]);

    useEffect(() => {
        if (sentinelRef.current !== null) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isLastPage) {
                        showMore()
                    }
                });
            });

            observer.observe(sentinelRef.current);

            return () => {
                observer.disconnect();
            };
        }
    }, [isLastPage, showMore]);

    return (
        <div className="ais-InfiniteHits">
            {!isLoading
                ? <ul className="ais-InfiniteHits-list">

                    {hits.map((hit) => (
                        <StyledLink key={hit.objectID} to={`/anime/${hit.objectID}`}>
                            <ItemCard kind={hit.kind} title={hit.title} poster_image={hit.poster_image} />
                        </StyledLink>
                    ))}
                </ul>
                : <LoadingWrapper>
                    <BeatLoader loading size={20} speedMultiplier={1}/>
                </LoadingWrapper>
            }
            <div ref={sentinelRef} aria-hidden="true" />
        </div>
    );
}
