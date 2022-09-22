import styled from 'styled-components'
import StyledLink from 'components/UI/Link/StyledLink';
import { CommentButtons } from './Buttons/CommentButtons';

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px dashed #b9b8b8;
    text-align: left;
    margin-top: 10px;

`;

const Avatar = styled.div`
    margin-right: 10px;
    margin-bottom: 10px;    
    img {
        width: 60px;
        height:60px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
    width: 107%;
`;

const SubLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:10px;
    width: 155px;
    align-items: center;
`;

const SubRight = styled.div`
    display: flex;
    height: 100%;
`;

const Nickname = styled.div`
    font-weight: bold;
    height: 25px;
    font-size: 16px;
`;

const DateTime = styled.div`
    font-size: 12px;
    color:#4342429b;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
`;

const Body = styled.div`
    font-size: 16px;
`;




export const Comment = ({ avatar, nickname, datetime, id, body, buttons }) => {
    return (
        <Container>
            <Avatar>
                    <img src={avatar} alt='user'></img>
            </Avatar>
    
            <SubContainer>

                <Header>
                    <SubLeft>
                        <StyledLink to={`/${id}`}>
                            <Nickname>{nickname}</Nickname>
                        </StyledLink>
                        <DateTime>{datetime}</DateTime>
                    </SubLeft>

                    <SubRight>
                        {buttons}
                    </SubRight>
                </Header>
                <Body>
                    {body}
                </Body>
            </SubContainer>
        </Container>
    )
}
