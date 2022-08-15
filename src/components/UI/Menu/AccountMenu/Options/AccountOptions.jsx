import DraftsIcon from '@mui/icons-material/Drafts';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import StyledLink from 'components/UI/Link/StyledLink';
import { BasicMenu } from '../../MenuBasic';
import { MenuOptionButton } from 'components/Buttons/MenuOptionButton';



export const AccountOptions = () => {
    return (
        <BasicMenu title='Account'>

            <MenuOptionButton title='My Anime List'>
                <PlaylistAddCheckOutlinedIcon />
            </MenuOptionButton>

            <MenuOptionButton title='Mail'>
                <DraftsIcon />
            </MenuOptionButton>

            <StyledLink style={{ color: 'white' }} to='/account'>
                <MenuOptionButton title='Settings'>
                    <SettingsOutlinedIcon />
                </MenuOptionButton>
            </StyledLink>

        </BasicMenu>
    );
}
