import React from 'react'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Notification = () => {
  return (
    <div>
        <IconButton size="large" aria-label="show new notifications" color="inherit">
            <Badge badgeContent={5} color="error">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    </div>
  )
}

