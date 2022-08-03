import React from 'react'
import Button from '@mui/material/Button';

const SubmitButton = (props) => {
  return (
    <div>
        <Button
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

export default SubmitButton