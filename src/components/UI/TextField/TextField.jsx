import React from 'react'
import TextField from '@mui/material/TextField';

export const MyTextField = ({ id, label, name, autoComplete, type }) => {
    return (
        <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            id={id}
            label={label}
            name={name}
            type={type}
            autoComplete={autoComplete}
            
        />
    )
}

