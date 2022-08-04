import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


export const CommunityOptions = () => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Community
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ForumOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Forum" />
      </ListItemButton>


      <ListItemButton>
        <ListItemIcon>
          <HistoryEduOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PeopleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
    </List>
  );
}
