import moment from 'moment/moment';
import StyledLink from 'components/UI/Link/StyledLink';
import UserService from 'api/UserSerivce';
import styled from "styled-components"
import { AnimetatisticDonut } from 'pages/MyAnimeList/AnimeStatisticDonut';
import { ActionsCard } from './Card/ActionsCard';
import { BeatLoader } from 'react-spinners'
import { Feed } from "./Feed"
import { Panel } from 'components/UI/Panel/Panel';
import { ProfileActionButtons } from './Buttons/ProfileActionButtons';
import { MangaStatisticDonut } from 'pages/MyMangaList/MangaStatisticDonut'
import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


const Body = styled.div`
    display:flex;
    flex-wrap: wrap;
    min-height: 80%;
    
`;

const ProfileHead = styled.div`
    padding: 0;
    margin-top: 10px;
    height: 390px;
    width: 1200px;
    /* border: 2px solid red; */
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 300px;
`;

const Picture = styled.div`
    width: 200px;
    height:200px;
    margin: 15px;

    img {
        width: 100%;
    }
`;

const Stats = styled.div`
    /* border: 2px solid green; */
    width: 55%;
`;

const History = styled.div`
    /* border: 2px solid gold; */
    width: 25%;
`;

const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;

    h3 {
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }
`;

const OnlineDateTime = styled.div`
    font-size: 12px;
    color:#4342429b;
    margin-top: 13px;
    margin-left: 13px;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ListStatistic = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 100%;
`;

const MyAnimeList = styled.div`
    font-size: 17px;
    font-weight:bold;
    text-align: left;
    width: 50%;
`;

const MyMangaList = styled.div`
    font-size: 17px;
    font-weight:bold;
    text-align: left;
    width: 30%;
`;


export const Profile = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const accessToken = JSON.parse(localStorage.getItem('JWT'))['access']

    const [fetchAuthUser, isLoading, error] = useFetch(async () => {
        const response = await UserService.getAuthUser(id, accessToken)
        if (response.status !== 200) alert(response.status)
        const data = await response.json()
        setUser(data)
    })

    useEffect(() => {
        fetchAuthUser()
    }, [])

    return (
        <Body>
            {isLoading &&
                <LoadingWrapper>
                    <BeatLoader loading size={20} speedMultiplier={1} />
                </LoadingWrapper>
            }
            {!isLoading &&
                <>
                    <ProfileHead>
                        <Picture>
                            <img src={user.avatar_url} alt="avatar" />
                            <ProfileActionButtons />
                        </Picture>

                        <Stats>
                            <PersonalInfo>
                                <div style={{display:"flex"}}>
                                    <h3>{user.nickname}</h3>
                                    <OnlineDateTime>
                                        <p>online 25 days ago</p>
                                    </OnlineDateTime>
                                </div>

                                <div>
                                    <p>{user.gender} / {`${moment().diff(user.birthdate, "years")} years`} / {`member since 2017`}</p>
                                </div>
                            </PersonalInfo>

                            <ListStatistic>
                                <MyAnimeList>
                                    <StyledLink to={`/${id}/list/anime`}>My Anime List</StyledLink>
                                    <AnimetatisticDonut />
                                </MyAnimeList>

                                <MyMangaList>
                                    <StyledLink to={`/${id}/list/anime`}>My Manga List</StyledLink>
                                    <MangaStatisticDonut />
                                </MyMangaList>

                            </ListStatistic>
                        </Stats>

                        <History>
                            <Panel title="Actions" />
                            <ActionsCard poster_link="https://nyaa.shikimori.one/system/animes/x96/42310.jpg?1659443430" />
                            <ActionsCard poster_link="https://nyaa.shikimori.one/system/animes/x96/48580.jpg?1646665781" />
                            <ActionsCard poster_link="https://dere.shikimori.one/system/animes/x96/50709.jpg?1662202909" />
                        </History>

                    </ProfileHead>
                    <Feed />
                </>
            }
        </Body>
    )
}
