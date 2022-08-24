import Box from '@mui/material/Box';

import React from 'react'

export const GenericForm = ({children}) => {
    return (
        <Box style={{
                margin: 'auto',
                width:'500px', 
                justifyContent:"center", 
                display:'flex', 
                flexDirection:'column'
            }}  component="form" noValidate>
            {children}
        </Box>
    )
}
