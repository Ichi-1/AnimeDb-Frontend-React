import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SubmitButton from '../../UI/Buttons/SubmitButton/SubmitButton'
import StyledLink from '../../UI/Link/StyledLink';

const theme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'block',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Password reset
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                    Here you can recover your password by sending an email with instructions
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
   
                        <TextField
                            autoFocus
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            autoComplete="email"
                        />

                        <SubmitButton verb='Send instruction on Email' />

                        <Grid container direction='column' >
                            <Grid item p={1}>
                                <StyledLink to="/sign_up">
                                    Register a new account
                                </StyledLink>
                            </Grid>

                            <Grid item p={1}>
                                <StyledLink to="/sign_in">
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