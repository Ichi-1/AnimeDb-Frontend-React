import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import StyledLink from 'components/UI/Link/StyledLink';

export const HeaderLoginButton = () => {
  return (
    <Stack direction="row" spacing={2}>
        <StyledLink to='/login' >
            <Button  style={{color:'white', fontWeight:'bold', fontSize:'20px'}}>Login</Button>
        </StyledLink>
    </Stack>
  );
}