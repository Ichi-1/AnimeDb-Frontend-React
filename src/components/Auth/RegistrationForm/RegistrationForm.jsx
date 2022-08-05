import React from 'react';
import AuthService from '../../../api/AuthService';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StyledLink from 'components/UI/Link/StyledLink';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SubmitButton } from 'components/UI/Buttons/SubmitButton/SubmitButton'
import { MyTextField } from 'components/UI/TextField/TextField';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export const RegistrationForm = () => {
    const navigate = useNavigate();
    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const nickname = data.get('nickname')
        const password = data.get('password')
        const email = data.get('email')

        const request = await AuthService.userRegistration(
            nickname, email, password
        )
        const response = await request.json()


        if (request.status !== 201) {
            console.log('ERROR', request.status)

            for (let field in response) {
                let error = response[field]
                console.log(`${field}: ${error.toString()}`)
            }
        } else {
            navigate('/')
        }

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Registration
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Create an account - it's free and only takes a minute.
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSignUpSubmit} sx={{ mt: 1 }}>
                        <MyTextField
                            id="nickname"
                            label="Login (nickname)"
                            name="nickname"
                            autoComplete="nickname"
                        />
                        <MyTextField
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            autoComplete="current-email"
                        />
                        <MyTextField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                        />


                        <SubmitButton verb='Sign Up' />

                        <Grid container direction='column' >
                            <Grid item p={1}>
                                <StyledLink to="/login">
                                    Sign in to an existing account
                                </StyledLink>
                            </Grid>

                            <Grid item p={1}>
                                <StyledLink to="/users/password/reset">
                                    Forgot password?
                                </StyledLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}