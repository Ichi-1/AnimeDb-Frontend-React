import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import AuthContext from 'context/AuthContext';


export const MyAvatar = () => {
    const { user } = useContext(AuthContext)

    // TODO fix default avatar link 
    // TODO also manage link with google user
    // media/user_avatar/default.jpg

    return (
        <Stack direction="row" spacing={2}>
            <Avatar src={user.avatar} variant="square" sizes='large' />
        </Stack>
    );
}