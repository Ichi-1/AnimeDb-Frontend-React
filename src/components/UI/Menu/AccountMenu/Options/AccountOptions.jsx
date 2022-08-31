import DraftsIcon from '@mui/icons-material/Drafts';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import PortraitIcon from '@mui/icons-material/Portrait';

import StyledLink from 'components/UI/Link/StyledLink';
import { BasicMenu } from '../../MenuBasic';
import { MenuOptionButton } from 'components/UI/Menu/MenuOptionButton';

import { useContext } from 'react';
import AuthContext from 'context/AuthContext';

export const AccountOptions = () => {
    const { user } = useContext(AuthContext)

    return (
        <BasicMenu title='Account'>
            <StyledLink style={{ color: 'white' }} to={`/${user.user_id}`}>
                <MenuOptionButton title='Profile'>
                    <PortraitIcon />
                </MenuOptionButton>
            </StyledLink>

            <MenuOptionButton disabled='True' title='My Anime List'>
                <PlaylistAddCheckOutlinedIcon />
            </MenuOptionButton>

            <MenuOptionButton disabled='True' title='Mail'>
                <DraftsIcon />
            </MenuOptionButton>

            <StyledLink  style={{ color: 'white' }} to={`/${user.user_id}/settings/account`}>
                <MenuOptionButton  title='Settings'>
                    <SettingsOutlinedIcon />
                </MenuOptionButton>
            </StyledLink>

        </BasicMenu>
    );
}
