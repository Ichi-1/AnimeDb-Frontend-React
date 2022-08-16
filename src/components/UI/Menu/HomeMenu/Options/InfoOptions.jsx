import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';

import { BasicMenu } from '../../MenuBasic';
import { MenuOptionButton } from 'components/Buttons/MenuOptionButton';

export const InfoOptions = () => {
    return (
        <BasicMenu title={'Info'}>

            <MenuOptionButton disabled='True' title='About Us'>
                <InfoOutlinedIcon />
            </MenuOptionButton>

            <MenuOptionButton disabled='True' title="Moderation">
                <NewReleasesOutlinedIcon />
            </MenuOptionButton>

        </BasicMenu>
    );
}
