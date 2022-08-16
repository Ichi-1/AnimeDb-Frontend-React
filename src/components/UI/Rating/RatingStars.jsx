import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';



const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#176093',
    },
});

export const RatingStars = ({value}) => {
    //   const [value, setValue] = React.useState(2);

    return (
        <StyledRating name="read-only" value={value} precision={0.5} readOnly />

    );
}