import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';

// На будущее можно обернуть кнопки в линку и передавать path в пропсе
// import StyledLink from 'components/UI/Link/StyledLink';


export const MenuOptionButton = ({title, children, callback}) => {
  return (
    <Box sx={[
        {
            '&:hover': {
                color:'#000',
                backgroundColor: '#f5f0f07e',

            }
        }
      ]}>
      <ListItemButton >
        <ListItemIcon >
          {children}
        </ListItemIcon>
        <ListItemText primary={title} onClick={callback}  />
      </ListItemButton>

    </Box>
  );
}