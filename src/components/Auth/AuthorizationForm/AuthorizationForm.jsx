import React, { useContext } from 'react';
import AuthContext from 'components/Auth/context/AuthContext';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StyledLink from 'components/UI/Link/StyledLink';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SubmitButton } from 'components/Buttons/SubmitButton/SubmitButton';
import { MyTextField } from 'components/UI/TextField/TextField';




const theme = createTheme();

export const AuthorizationForm = () => {
    const { loginUser } = useContext(AuthContext)

    return (
        <ThemeProvider theme={theme}>
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
                    {/* <MyAlert key={'success'} variant={'success'} /> */}
                    <Typography component="h1" variant="h4">
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