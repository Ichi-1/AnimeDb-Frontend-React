import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';

export const InfoOptions = () => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Info
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <InfoOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItemButton>


      <ListItemButton>
        <ListItemIcon>
          <NewReleasesOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Moderation" />
      </ListItemButton>

      
    </List>
  );
}
