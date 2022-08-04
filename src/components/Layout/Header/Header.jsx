import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchBar from 'components/SearchBar/SearchBar';
import { Logo } from 'components/UI/Logo/Logo'
import { AccountButton } from 'components/UI/Buttons/AccountButton'
import { HomeButton } from 'components/UI/Buttons/HomeButton'
import { ForumButton } from 'components/UI/Buttons/ForumButton';
import { Notification } from 'components/UI/Buttons/NotificationButton'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

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
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Logo />
                        <HomeButton />
                        <SearchBar />

                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                            <ForumButton />
                            <Notification />
                            <AccountButton />
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            
            {renderMenu}
        </Box>
    );
}
