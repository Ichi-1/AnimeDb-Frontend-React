import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export const ProfileActionButtons = () => {
    const scrollToBottom = () => {
        window.scrollTo(50, 200)
        const commentEditor = document.getElementById('CommentEditor')
        // TODO commenteditor  Fade-in animation on click
    }

    return (
        <div>
            <Box>
                <Tooltip title="Chat">
                    <IconButton onClick={scrollToBottom} disableRipple size="">
                        <EmailIcon htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Add to friend">
                    <IconButton disableRipple size="large">
                        <GroupAddIcon htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Ignore user">
                    <IconButton disableRipple size="large">
                        <VisibilityOffIcon htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>
            </Box>
        </div>
    )
}
