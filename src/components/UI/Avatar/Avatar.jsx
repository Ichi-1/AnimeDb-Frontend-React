import * as React from 'react';
import Avatar  from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange} from '@mui/material/colors';

export default function MyAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        N
      </Avatar>
    </Stack>
  );
}