import React, { useEffect, useRef, useState } from 'react';
import { useInfiniteHits } from 'react-instantsearch-hooks-web';
import { ItemCard } from 'components/UI/Hits/ItemCard';
import { MoonLoader } from 'react-spinners';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    width: 48vmax;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export function InfiniteHits(props) {
    const { hits, isLastPage, showMore, results } = useInfiniteHits(props);
    const [isLoading, setLoading] = useState(true);
    const sentinelRef = useRef(null);


    useEffect(() => {
        setTimeout(() => setLoading(false), 800)

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
                        <ItemCard kind={hit.kind} title={hit.title} poster_image={hit.poster_image} />
                    ))}
                </ul>
                : <LoadingWrapper>
                    <MoonLoader loading size={40} />
                </LoadingWrapper>
            }
            <div ref={sentinelRef} aria-hidden="true" />
        </div>
    );
}
