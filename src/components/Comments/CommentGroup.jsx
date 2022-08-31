import { useFetch } from 'hooks/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Panel } from 'components/UI/Panel/Panel'
import { Comment } from './Comment'
import styled from 'styled-components'
import AnimeSerivce from 'api/AnimeService';
import { BeatLoader } from 'react-spinners';
import parse from 'html-react-parser'


const Container = styled.div`
    margin-top: 50px;
    width:95%;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const fake = "Глава понравилась.“Hawkeye Mihawk”!! Also a former Warlord of the Sea and his swordsmanship surpasses that of the Emperor “Red Haired”!! As the Strongest Swordsman in the World, he’s wanted for..!! 3.5 billion and 90 million berries!!Михоук=ТОП1"

export const CommentGroup = () => {
    const [comments, setComments] = useState([])
    const { id } = useParams()

    const [fetchComments, isLoading, error] = useFetch(async () => {
        const response = await AnimeSerivce.getComments(id)
        setComments(response.result)
    })

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <Container>
            <Panel title='Comments' />
            {isLoading &&
                <LoadingWrapper>
                    <BeatLoader loading size={20} speedMultiplier={1} />
                </LoadingWrapper>
            }
            <Comment
                nickname='HelloWorld'
                body={fake}
                avatar='https://moe.shikimori.one/system/users/x160/743787.png?1650454722'
                datetime='3 hours ago'
            />

            {!isLoading && (
                <>
                {comments.map(comment => {
                    return <Comment
                        key={comment.id}
                        avatar={comment.author.avatar_url} 
                        nickname={comment.author.nickname}
                        body={parse(comment.body)}
                        datetime={comment.updated_at}
                    />
                })}
                </>
            )}

        </Container>
    )
}
