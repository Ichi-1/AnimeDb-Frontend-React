import React from 'react'
import Button from '@mui/material/Button';

export const GenericButton = ({onClick, verb}) => {
  return (
    <div>
        <Button
        onClick={onClick}
        style={{
                backgroundColor: "#575a60",
                fontWeight:"",

            }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
        >
        {verb}
        </Button>
    </div>
  )
}

