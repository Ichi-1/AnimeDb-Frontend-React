import { useContext } from 'react';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AuthContext from 'components/Auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';

import { BasicMenu } from '../../MenuBasic';
import { MenuOptionButton } from 'components/Buttons/MenuOptionButton';

export const SiteOptions = () => {
    const  {logoutUser} = useContext(AuthContext)
    const redirect = useNavigate()

    return (
        <BasicMenu title='Site'>

            <MenuOptionButton title='FAQ'>
                    <HelpOutlineRoundedIcon />
            </MenuOptionButton>

            <MenuOptionButton title='Logout' callback={() => {logoutUser(); redirect('/login')}}>
                <LogoutRoundedIcon />
            </MenuOptionButton>

        </BasicMenu>
    );
}