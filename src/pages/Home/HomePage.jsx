import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../components/Auth/context/AuthContext'
import classess from './HomePage.module.css'
import StyledLink from 'components/UI/Link/StyledLink'
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

export const HomePage = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    // margin:'auto',
                    marginTop: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                

                    {user
                        ? <Typography component="h1" variant="h4">Hello, {user.nickname}</Typography>
                        : <Typography component="h1" variant="h4">Hello, anonymous </Typography>

                    }



                    <Typography variant="caption" display="block" gutterBottom>
                        <StyledLink to='/account'>
                            Content only for auhtenticated users
                        </StyledLink>
                    </Typography>

                    

            </Box>

        </Container>

    )
}

