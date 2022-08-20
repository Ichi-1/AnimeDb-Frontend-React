import styled from 'styled-components'
import StyledLink from 'components/UI/Link/StyledLink';


const MainContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px dashed #b9b8b8;
    text-align: left;
    margin-top: 10px;

`;

const Avatar = styled.div`
    margin-right: 10px;
    margin-bottom: 10px;    
    img {
        width: 100px;
        height:100px;
    }
`;

const SubContainer = styled.div`
    flex-direction: column;
`;

const Nickname = styled.div`
    font-weight: bold;
`;

const LastOnline = styled.div`
    font-size: 14px;
`;



export const User = ({ avatar, nickname, last_online, id }) => {
    return (
        <MainContainer>
            <Avatar><img src={avatar}></img></Avatar>
            <SubContainer>
                <StyledLink to={`/${id}`}>
                    <Nickname>{nickname}</Nickname>
                </StyledLink>
                <LastOnline>{last_online}</LastOnline>
            </SubContainer>
        </MainContainer>
    )
}
