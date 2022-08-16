import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export const ContentButtons = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Leave a Comment">
                    <IconButton size="large">
                        <ForumOutlinedIcon htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Write a Review">
                    <IconButton size="large">
                        <HistoryEduOutlinedIcon htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>


                <Tooltip title="Add to Favourite">
                    <IconButton size="large">
                        <StarRateIcon htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>


                <Tooltip title="Eddit an Info">
                    <IconButton size="large">
                        <SettingsSuggestIcon htmlColor='#000' sx={{
                            "&:hover, &.Mui-focusVisible": { color: "rgb(248, 89, 21)" }
                        }} />
                    </IconButton>
                </Tooltip>

            </Box>
        </div>
    )
}
