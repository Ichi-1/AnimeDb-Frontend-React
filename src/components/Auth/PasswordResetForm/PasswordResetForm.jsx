import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StyledLink from 'components/UI/Link/StyledLink';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { handleResetPasswordSubmit } from 'components/Auth/RegistrationForm/handleSubmit';
import { SubmitButton } from 'components/Buttons/SubmitButton/SubmitButton'
import { MyTextField } from 'components/UI/TextField/TextField';

import { MyAlert } from 'components/Alert/Alert'

const theme = createTheme();

export const PasswordResetForm = () => {

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 15,
                        display: 'block',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >   

                    {/* <MyAlert key={'success'} variant={'success'} /> */}
                    <Typography component="h1" variant="h5">
                        Password reset
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Here you can recover your password by sending an email with instructions
                    </Typography>

                    <Box component="form" onSubmit={handleResetPasswordSubmit} noValidate sx={{ mt: 1 }}>
                        <MyTextField
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                        />

                        <SubmitButton verb='Send instruction on Email' />

                        <Grid container direction='column' >
                            <Grid item p={1}>
                                <StyledLink to="/sign_up">
                                    Register a new account
                                </StyledLink>
                            </Grid>

                            <Grid item p={1}>
                                <StyledLink to="/login">
                                    Sign in to an existing account
                                </StyledLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}