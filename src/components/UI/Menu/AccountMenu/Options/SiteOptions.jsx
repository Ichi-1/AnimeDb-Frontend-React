import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AuthContext from 'components/Auth/context/AuthContext';



export const SiteOptions = () => {
    const  {logoutUser} = useContext(AuthContext)

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Site
                </ListSubheader>
            }
        >
            <ListItemButton>
                <ListItemIcon>
                    <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="FAQ" />
            </ListItemButton>


            <ListItemButton>
                <ListItemIcon>
                    <LogoutRoundedIcon />
                </ListItemIcon>
                <ListItemText onClick={logoutUser} primary="Logout" />
            </ListItemButton>

        </List>
    );
}