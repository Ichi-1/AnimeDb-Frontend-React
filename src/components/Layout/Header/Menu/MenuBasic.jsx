import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';


export const BasicMenu = ({title, children}) => {
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: '#3e4143' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader 
            component="div" 
            id="nested-list-subheader"
            style={{
                fontWeight:'400',
                backgroundColor: '#3e4143', 
                textTransform:'uppercase', 
                color:'#fff'
            }}
            >
            {title}
          </ListSubheader>
        }
      >
        {children}
      </List>
    );
  }
  