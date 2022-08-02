import React from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import IconButton from '@mui/material/IconButton';


const ForumButton = () => {
  return (
    <div>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <ForumOutlinedIcon />
        </IconButton>
    </div>
  )
}

export default ForumButton