import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import StyledLink from 'components/UI/Link/StyledLink';

import { BasicMenu } from '../../MenuBasic';
import { MenuOptionButton } from 'components/UI/Menu/MenuOptionButton';

export const DatabaseOptions = () => {
    return (
        <BasicMenu title='Database'>
            
            <StyledLink style={{ color: 'white' }} to="/anime">
                <MenuOptionButton title='Anime'>
                    <FontDownloadOutlinedIcon />
                </MenuOptionButton>
            </StyledLink>

        </BasicMenu>
    );
}
