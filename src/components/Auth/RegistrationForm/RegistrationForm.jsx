import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StyledLink from 'components/UI/Link/StyledLink';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SubmitButton } from 'components/Buttons/SubmitButton/SubmitButton'
import { MyTextField } from 'components/UI/TextField/TextField';
import { MyAlert } from 'components/Alert/Alert'
import { SocialAuthButtons } from 'components/Buttons/SocialAuthButtons/SocialAuthButtons';
import FormHandler from 'utils/FormHandler';

const theme = createTheme();


export const RegistrationForm = () => {
    const [messageStatus, setMessageStatus] = useState(null)
    const [messageText, setMessageText] = useState(null)

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                
                <CssBaseline />
                
                <Box
                    sx={{
                        marginTop: 15,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >   
                {messageText &&
                    <MyAlert variant={messageStatus} text={messageText} key={messageStatus} />
                }
                    
                    <Typography component="h1" variant="h4">
                        Registration
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Create an account - it's free and only takes a minute.
                    </Typography>

                    <Box sx={{ mt: 1 }} component="form" noValidate onSubmit={(e) => {
                        FormHandler.signUpSubmit(e).then(result => {
                            const status = result[0]
                            const text = result[1]
                            setMessageStatus(status)
                            setMessageText(text)
                        })
                    }} 
                    >

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
                        <hr/>
                        <SocialAuthButtons />
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}