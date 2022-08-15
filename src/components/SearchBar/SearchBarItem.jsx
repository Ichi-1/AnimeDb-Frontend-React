import React from "react";
import styled from "styled-components";
import StyledLink from "components/UI/Link/StyledLink";
import Typography from '@mui/material/Typography';

import { Link, useNavigate } from 'react-router-dom'

const AnimeScreenContainer = styled.div`

    width: 100%;
    min-height: 8em;
    display: flex;
    border-bottom: 2px solid #d8d8d852;
    padding: 6px 8px;
    align-items: center;


    &:hover {
        background-image: linear-gradient(to left, #69c8fb65, #69c8fb36, #fff, #fff);
        background-position: 100% 0;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }

`;

const PosterImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width:100px;
    height:100%;
    
`;

const InfoContainter = styled.div`
    margin-left: 10px;
    width: 100%;
`

const Title = styled.div`
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;

    cursor: pointer;

    color: #176093;

    &:hover {
        color:rgb(248, 89, 21);
    }

`;

const Rating = styled.span`
    float: right;
    color: #a1a1a1;
    font-size: 16px;

`;

const Release = styled.div`
    text-align: left;
    font-size: 12px;
    color: black;

`

const Tags = styled.div`
    text-align: left;
    font-size: 12px;
    color: black;
`


// const clearFields = () => {

//     document.getElementById("expandedContainer"). = "collapsed";
//     console.log('click')
// }


export function AnimeScreen({ imageSrc, title, rating, id, tags, kind, year }) {


    return (
        <AnimeScreenContainer>

            <Link key={id} to={`/anime/${id}`}>
                <PosterImage>
                    <img style={{ objectFit: 'fill', height: '150px', width: '100%' }} src={imageSrc} />
                </PosterImage>
            </Link>


            <InfoContainter>
                <Title>
                    <StyledLink style={{ textDecoration: 'none' }} key={id} to={`/anime/${id}`}>
                        {title}
                    </StyledLink>
                    <Rating>{rating}</Rating>
                </Title>

                <Release>
                    <b>Release:</b> {kind} {year}
                </Release>

                <Tags>
                    <b>Tags:</b> {tags}
                </Tags>
            </InfoContainter>


        </AnimeScreenContainer>
    );
}