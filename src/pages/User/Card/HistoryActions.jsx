import React from 'react'
import styled from "styled-components"
import StyledLink from 'components/UI/Link/StyledLink';


const Body = styled.div`
    display: flex;
    height:85px;
    width: 100%;
    margin-top: 10px;

    border-bottom: 1px dashed #b9b8b8;
`;

const PosterImage = styled.div`

    img {
        /* float: left; */
        height:70px;
        max-width:55px;
    }
`;

const ActionContainer = styled.div`
    width:90%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 5px;
    gap:5px;
   
`;

const ContentName = styled.div`
    font-size: 17px;
    font-weight:bold;
`;

const ActionName = styled.div`
    font-size: 13px;
    color:#232323d9;
`;

const ActionDateTime = styled.div`
    font-size: 12px;
    color:#4342429b;
`;


export const Action = ({ poster_link, id }) => {
    return (
        <Body>
            <PosterImage>
                <img src={poster_link}></img>
            </PosterImage>
            <ActionContainer>
                <StyledLink to={"/anime/1/"}>
                    <ContentName>Cowboy Bebop</ContentName>
                </StyledLink>
                <ActionName>Брошено. Добавлено в список</ActionName>
                <ActionDateTime>4 часа назад</ActionDateTime>
            </ActionContainer>
        </Body>
    )
}
