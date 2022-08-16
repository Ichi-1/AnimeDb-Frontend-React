import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AnimeSerivce from 'api/AnimeService'
import { useFetch } from 'hooks/useFetch'
import styled from 'styled-components'
import { Panel } from 'components/UI/Panel/Panel'
import { RatingStars } from 'components/UI/Rating/RatingStars'
import { BeatLoader } from 'react-spinners'
import { ContentButtons } from 'components/Buttons/ContentButtons/ContentButtons'


const Header = styled.div`
    margin-top: 10px;
    padding: 5px;
    text-align: left;
    display: block;
    height: 75px;
    /* border: 2px solid red; */
`

const Body = styled.div`
    display:flex;
    flex-wrap: wrap;
    min-height: 80%;
    margin-top: 15px;


    /* border: 2px solid red; */
`;

const SideBar = styled.div`
    width: 19%;

`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 30px;
    width: 81%;
    height:100%;
`;

const PosterContainer = styled.div`
    margin-top:15px;

    img {
      width:280px;
      height: 420px;
    }

`;

const InfoContainer = styled.div`
    width: 30%;
`;

const InfoValueContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: left;
`;

const InfoValue = styled.div`
    hyphens: auto;
    word-wrap: break-word;
`;

const RatingContainer = styled.div`
    width: 30%;
    text-align: left;
`;

const Rating = styled.span`
    float: right;
    color: #a1a1a1;
    font-size: 20px;

`;

const DescriptionContainer = styled.div`
    width: 700px;
`;

const DescriptionValue = styled.div`
    font-size: 16px;
    text-align: left;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RecommendationContainer = styled.div`
    width: 700px;
`;


export const SingleContentPage = () => {
    const { id } = useParams()
    const [content, setContent] = useState([])
    const [tags, setTags] = useState([])
    const [description, setDescription] = useState('')
    const [ratingStar, setRatingStar] = useState('')

    const [fetchSingle, isLoading, error] = useFetch(async () => {
        const response = await AnimeSerivce.getByID(id)
        const data = response.data
        const tags = data.tags.split(',').slice(0, 6).join(',')
        let description = data.description
        const rating = parseFloat(String(parseInt(data.average_rating)/2).split('')[0]) + 0.5
        
        

        if (description.length > 500) {
            description = description.slice(0, 501) + '...'
        }

        setDescription(description)
        setContent(data)
        setTags(tags)
        setRatingStar(rating)

    })

    useEffect(() => {
        fetchSingle()
    }, [id])

    return (
        <div style={{ width: '98%' }}>
        {!isLoading 
            ? <div>
                <Header>
                    <h3>
                        {content.title}
                        <span style={{ color: 'gray', marginRight: '20px', marginLeft: "20px" }}>/</span>
                        {content.title_jp}
                    </h3>
                    <p>bread / crumbs / place</p>
                </Header>
                <Body>
                    <Content>
                        <PosterContainer>
                            <img src={content.poster_image}></img>
                            <ContentButtons />
                        </PosterContainer>

                        <InfoContainer>
                            <Panel title="Info" />
                            <InfoValueContainer>
                                <InfoValue><b>Type:</b> {content.kind}</InfoValue>
                                <InfoValue><b>Age rating:</b> {content.age_rating}, {content.age_rating_guide}</InfoValue>
                                <InfoValue><b>Release year:</b> {content.year}</InfoValue>
                                <InfoValue><b>Season:</b> {content.season}</InfoValue>
                                <InfoValue><b>End year:</b> {content.year_end}</InfoValue>
                                <InfoValue><b>Studio:</b> {content.studio}</InfoValue>
                                <InfoValue><b>Episodes:</b> {content.episode_count}</InfoValue>
                                <InfoValue><b>Tags:</b> {tags}</InfoValue>

                            </InfoValueContainer>
                        </InfoContainer>

                        <RatingContainer>
                            <Panel title='Rating' />
                            <RatingStars value={ratingStar}   />
                            <Rating>{content.average_rating}</Rating>
                        </RatingContainer>
                    
                        
                        <DescriptionContainer>
                            <Panel title='Description' />
                            <DescriptionValue>{description}</DescriptionValue>
                        </DescriptionContainer>

                        <RecommendationContainer>
                            <Panel title='Recommendation' />
                        </RecommendationContainer>
                    </Content>
                    <SideBar>
                        <Panel title='Favourites' />
                        <Panel title='Community score' />
                        <Panel title='collections' />
                        <Panel title='sources' />
                    </SideBar>
                </Body>
            </div>
            : <LoadingWrapper>
                <BeatLoader loading size={20} speedMultiplier={1}/>
            </LoadingWrapper> 

        }



        </div>
    )
}

