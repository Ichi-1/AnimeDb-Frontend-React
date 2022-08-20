import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import { BasicMenu } from '../../MenuBasic';
import { MenuOptionButton } from 'components/Buttons/MenuOptionButton';
import StyledLink from 'components/UI/Link/StyledLink';

export const CommunityOptions = () => {
    return (
        <BasicMenu title={'Community'}>

            <MenuOptionButton disabled='True' title={'Forum'}>
                <ForumOutlinedIcon />
            </MenuOptionButton>

            <MenuOptionButton disabled='True' title={'Reviews'}>
                <HistoryEduOutlinedIcon />
            </MenuOptionButton>

            <StyledLink style={{ color: 'white' }} to='/users'>
                <MenuOptionButton title={'Users'}>
                    <PeopleOutlineIcon />
                </MenuOptionButton>
            </StyledLink>
            
        </BasicMenu>
    );
}
