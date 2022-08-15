import React, { useContext } from 'react';
import Avatar  from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange} from '@mui/material/colors';

import AuthContext from 'components/Auth/context/AuthContext';


export const MyAvatar = () => {
    // const { user } = useContext(AuthContext)

  return (
    <Stack direction="row" spacing={2}>
      <Avatar  sx={{ bgcolor: deepOrange[500] }} variant="square" />
    </Stack>
  );
}