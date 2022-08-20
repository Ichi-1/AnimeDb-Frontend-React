import React, { useState, useEffect } from 'react'
import { useFetch } from 'hooks/useFetch'
import Typography from '@mui/material/Typography';
import UserService from 'api/UserSerivce'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners';
import { User } from './User'
import { convertTime } from 'utils/parseDate';

const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
    justify-content: space-evenly;
`;

const Container = styled.div`
    width: 1100px;
    margin:0;
    padding: 0;

    /* border: 2px solid red; */
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;



export const UsersList = () => {
    const [usersList, setUsersList] = useState([])

    const [fetchUsersList, isLoading, error] = useFetch(async () => {
        const response = await UserService.getList()
        console.log(response.data)
        setUsersList(response.data)
    })


    useEffect(() => {
        fetchUsersList()
    }, [])

    return (
        <div>
            <Header>
                <Typography component="h3" variant="h7">
                    Users
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    This page display all registered users
                </Typography>
            </Header>

            <Container>
                {isLoading && (
                    <LoadingWrapper>
                        <BeatLoader loading size={20} speedMultiplier={1} />
                    </LoadingWrapper>
                )}

                {!isLoading && (
                    <>
                        {usersList.map(user => {
                        return <User
                                id={user.id}
                                avatar={user.avatar_url}
                                nickname={user.nickname}
                                last_online={user.last_login !== null ? convertTime(user.last_login) : ''}
                            />
                        })}
                    </>
                )}
            
            </Container>


        </div>
    )
}
