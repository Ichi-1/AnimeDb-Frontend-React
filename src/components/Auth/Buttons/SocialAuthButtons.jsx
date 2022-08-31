import React from 'react'
import Box from '@mui/material/Box';
import { Google } from './Google';
import { GitHub } from './GitHub';


export const SocialAuthButtons = () => {
  return (
    <Box sx={{
        marginTop:2,
        marginLeft:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign:'left'
    }}>
        Social Authenctication
        <div style={{marginTop:"15px"}}>
            <Google />
            <GitHub />
        </div>
        
    </Box>
  )
}

