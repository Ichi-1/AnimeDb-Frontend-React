import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {SubmitButton} from '../../UI/Buttons/SubmitButton/SubmitButton';
import StyledLink from '../../UI/Link/StyledLink';
import AuthContext from '../context/AuthContext';
import MyTextField from 'components/UI/TextField/TextField';



const theme = createTheme();

export default function AuthorizationForm() {
    const {loginUser} = useContext(AuthContext)

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
                        Authorization
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        On this page you can log in to our website
                    </Typography>

                    <Box component="form" noValidate onSubmit={loginUser} sx={{ mt: 1 }}>
                        <MyTextField 
                            id="nickname"
                            label="Login (nickname)"
                            name="nickname"
                            autoComplete="current-nickname" />
                        <MyTextField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                        />
                       
                        <SubmitButton verb='Sign In' />

                        <Grid container direction='column' >
                            <Grid item p={1}>
                                <StyledLink to="/sign_up">
                                    Register new account
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