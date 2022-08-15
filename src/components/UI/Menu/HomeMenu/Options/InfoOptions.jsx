import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';

import { BasicMenu } from '../../MenuBasic';
import { MenuOptionButton } from 'components/Buttons/MenuOptionButton';

export const InfoOptions = () => {
    return (
        <BasicMenu title={'Info'}>

            <MenuOptionButton title='About Us'>
                <InfoOutlinedIcon />
            </MenuOptionButton>

            <MenuOptionButton title="Moderation">
                <NewReleasesOutlinedIcon />
            </MenuOptionButton>

        </BasicMenu>
    );
}
