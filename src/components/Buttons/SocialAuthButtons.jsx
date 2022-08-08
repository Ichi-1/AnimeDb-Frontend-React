import React from 'react'
import Box from '@mui/material/Box';
import { GoogleButton } from './GoogleButton';

export const SocialAuthButtons = () => {
  return (
    <Box sx={{
        marginTop:2,
        marginLeft:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        textAlign:'left'
    }}>
        Social Authenctication
        <div style={{marginTop:"15px"}}>
            <GoogleButton />
            
        </div>
        
    </Box>
  )
}

