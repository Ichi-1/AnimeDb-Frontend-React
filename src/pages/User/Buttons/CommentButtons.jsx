import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ReplyIcon from '@mui/icons-material/Reply';


export const CommentButtons = ({onClick, id}) => {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', textAlign: 'center' }}>
                
                <Tooltip title="Reply" placement='right'>
                    <IconButton id={id} onClick={onClick} disableRipple >
                        <ReplyIcon style={{width:'20px', height:'20px'}} htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>
                
            </Box>
        </div>
    )
}

export const MyCommentButtons = ({onClick, id}) => {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', textAlign: 'center' }}>
                
                <Tooltip title="Delete" placement='right'>
                    <IconButton id={id} onClick={onClick} disableRipple >
                        <DeleteIcon style={{width:'20px', height:'20px'}} htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>
                
            </Box>
        </div>
    )
}