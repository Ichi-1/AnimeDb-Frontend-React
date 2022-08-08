import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Logo } from 'components/UI/Logo/Logo'
import { AccountButton } from 'components/Buttons/AccountButton'
import { HomeButton } from 'components/Buttons/HomeButton'
import { ForumButton } from 'components/Buttons/ForumButton';
import { Notification } from 'components/Buttons/NotificationButton'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from 'styled-components'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#34373a',
        },
    },
});

const  Container = styled.div`
    margin: auto;
    z-index: 99;
    height:78px;
    width:100%;
    line-height:100%;
`;


export const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);

    };
    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );



    return (
        <Box sx={{
                flexGrow: 1,
            }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar 
                    position="static" 
                    color="primary" 
                    style={{ 
                        background: '#292b2d', 
                        paddingTop:"7px", 
                        paddingBottom:"7px",
                        fontFamily: "'Roboto', sans-serif"
                    }}>
                    <Toolbar>
                        <Logo />
                        <HomeButton />
                        <Container>
                            <SearchBar />
                        </Container>

                        <ForumButton />
                        <Notification />
                        <AccountButton />
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            
            {renderMenu}
        </Box>
    );
}
