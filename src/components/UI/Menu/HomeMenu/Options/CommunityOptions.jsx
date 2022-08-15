import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import { BasicMenu } from '../../MenuBasic';
import { MenuOptionButton } from 'components/Buttons/MenuOptionButton';

export const CommunityOptions = () => {
    return (
        <BasicMenu title={'Community'}>

            <MenuOptionButton title={'Forum'}>
                <ForumOutlinedIcon />
            </MenuOptionButton>

            <MenuOptionButton title={'Reviews'}>
                <HistoryEduOutlinedIcon />
            </MenuOptionButton>

            <MenuOptionButton title={'Users'}>
                <PeopleOutlineIcon />
            </MenuOptionButton>
            
        </BasicMenu>
    );
}
