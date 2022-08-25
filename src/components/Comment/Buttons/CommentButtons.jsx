import FlagIcon from '@mui/icons-material/Flag';
import ReplyIcon from '@mui/icons-material/Reply';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export const CommentButtons = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', textAlign: 'center' }}>
                
                <Tooltip title="Reply" placement='right'>
                    <IconButton disableRipple >
                        <ReplyIcon style={{width:'20px', height:'20px'}} htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>
                
                <Tooltip title="Report" placement='right'>
                    <IconButton disableRipple>
                        <FlagIcon style={{width:'20px', height:'20px'}} htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>


            </Box>
        </div>
    )
}
