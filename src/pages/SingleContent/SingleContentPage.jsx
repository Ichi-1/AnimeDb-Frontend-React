import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AnimeSerivce from 'api/AnimeService'
import { useFetch } from 'hooks/useFetch'
import styled from 'styled-components'
import { Panel, PanelWithLink } from 'components/UI/Panel/Panel'
import { RatingStars } from 'components/UI/Rating/RatingStars'
import { BeatLoader } from 'react-spinners'
import { ContentButtons } from 'components/Buttons/ContentButtons/ContentButtons'
import { ReadMoreButton } from 'components/Buttons/ReadMore/ReadMore'

const Header = styled.div`
    margin-top: 10px;
    padding: 5px;
    text-align: left;
    display: block;
    height: 75px;
    /* border: 2px solid red; */
`;

const Body = styled.div`
    display:flex;
    flex-wrap: wrap;
    min-height: 80%;
    margin-top: 15px;
    /* min-width: 1000px; */

    /* border: 2px solid red; */
`;

const SideBar = styled.div`
    width: 19%;

`;

const PosterContainer = styled.div`
    margin-top:15px;

    img {
      width:280px;
      height: 420px;
    }

`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
    width: 81%;
    height:100%;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    width:65%;
    margin-left: 30px;
`

const InfoValueContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: left;
`;

const InfoValue = styled.div`
    hyphens: auto;
    word-wrap: break-word;
    font-size: 16px;
    margin: 3px;
`;

const LeftContainer = styled.div`
    width: 45%;
`;

const RightContainerColumn = styled.div`
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

`;

const RatingContainer = styled.div`
    text-align: left;
`;

const Rating = styled.span`
    float: right;
    color: #a1a1a1;
    font-size: 20px;

`;

const StudioContainer = styled.div`
    text-align: left;
`

const DescriptionContainer = styled.div`
    width: 95%;
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
    width: 95%;
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
        const rating = parseFloat(String(parseInt(data.average_rating)/2).split('')[0]) + 0.5
        let description = data.description
        

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

                        <MainContainer>
                            <LeftContainer>
                                <Panel title="Info" />
                                <InfoValueContainer>
                                    <InfoValue><b>Type:</b> {content.kind}</InfoValue>
                                    <InfoValue><b>Age rating:</b> {content.age_rating}, {content.age_rating_guide}</InfoValue>
                                    <InfoValue><b>Release year:</b> {content.year}</InfoValue>
                                    <InfoValue><b>Season:</b> {content.season}</InfoValue>
                                    <InfoValue><b>End year:</b> {content.year_end}</InfoValue>
                                    <InfoValue><b>Episodes:</b> {content.episode_count}</InfoValue>
                                    <InfoValue><b>Tags:</b> {tags}</InfoValue>
                                </InfoValueContainer>
                            </LeftContainer>

                            <RightContainerColumn>
                                <RatingContainer>
                                    <Panel title='Rating' />
                                    <RatingStars value={ratingStar}   />
                                    <Rating>{content.average_rating}</Rating>
                                </RatingContainer>

                                <StudioContainer>
                                    <Panel title='Studio' />
                                    {content.studio}
                                </StudioContainer>
                                
                            </RightContainerColumn>

                            <DescriptionContainer>
                                <Panel title='Description' />

                                {description.length > 700 
                                    ? <DescriptionValue> 
                                        <ReadMoreButton text={description} />  
                                    </DescriptionValue> 
                                    : <DescriptionValue> 
                                        {description}
                                    </DescriptionValue> 
                                }   
                                
                                    
                                
                            </DescriptionContainer>

                            <RecommendationContainer>
                                <PanelWithLink title='Recommendation' />
                            </RecommendationContainer>

                        </MainContainer>
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

