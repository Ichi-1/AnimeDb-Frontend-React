import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import StyledLink from 'components/UI/Link/StyledLink';

import DraftsIcon from '@mui/icons-material/Drafts';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';


export default function AccountMenu() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Account
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <PlaylistAddCheckOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="My Anime List" />
      </ListItemButton>


      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Mail" />
      </ListItemButton>


      <StyledLink to='/account'>
        <ListItemButton>
            <ListItemIcon>
            <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
      </StyledLink>
      

    </List>
  );
}
