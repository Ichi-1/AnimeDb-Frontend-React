import React, { useContext} from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { AccountOptions } from 'components/UI/Menu/AccountMenu/Options/AccountOptions'
import { SiteOptions } from 'components/UI/Menu/AccountMenu/Options/SiteOptions'
import { MyAvatar } from 'components/UI/Avatar/Avatar';
import AuthContext from 'context/AuthContext';

export const AccountButton = () => {
    const { user } = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title={user.nickname}>
                    <IconButton
                        // disableRipple for disable on-click effect
                        disableRipple
                        onClick={handleClick}
                        size="large"
                        // sx={{ ml: 1, mb: 1}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <MyAvatar />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        bgcolor:'#3e4143',
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            mt: 0,
                            mr: 1,
                            
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: '#fff',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <AccountOptions />
                <SiteOptions />
            </Menu>
        </React.Fragment>
    );
}