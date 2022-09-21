import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StyledLink from 'components/UI/Link/StyledLink';

import { BasicMenu } from '../../MenuBasic';
import { MenuOptionButton } from 'components/Layout/Header/Menu/MenuOptionButton';

export const DatabaseOptions = () => {
    return (
        <BasicMenu title='Database'>
            
            <StyledLink style={{ color: 'white' }} to="/anime">
                <MenuOptionButton title='Anime'>
                    <OndemandVideoIcon />
                </MenuOptionButton>
            </StyledLink>

            <StyledLink style={{ color: 'white' }} to="/manga">
                <MenuOptionButton title='Manga'>
                    <AutoStoriesIcon />
                </MenuOptionButton>
            </StyledLink>


        </BasicMenu>
    );
}
