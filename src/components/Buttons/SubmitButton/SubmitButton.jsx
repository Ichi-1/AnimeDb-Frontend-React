import React from 'react'
import Button from '@mui/material/Button';

export const SubmitButton = (props) => {
  return (
    <div>
        <Button
        style={{
                backgroundColor: "#575a60",
                fontWeight:"",

            }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
        >
        {props.verb}
        </Button>
    </div>
  )
}

