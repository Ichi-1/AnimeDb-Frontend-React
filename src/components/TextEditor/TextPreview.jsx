import styled from 'styled-components'
import StyledLink from 'components/UI/Link/StyledLink';

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
        width: 100px;
        height:100px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
    width: 100%;
`;

const Sub = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:10px;
`;

const Nickname = styled.div`
    font-weight: bold;
    height: 25px;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
`;

const Body = styled.div`
    font-size: 14px;
`;



export const TextPreview = ({ avatar, nickname, id, body }) => {
    return (
        <Container>
            <Avatar>
                <img src={avatar} alt='user'></img>
            </Avatar>
            <SubContainer>
                <Header>
                    <Sub>
                        <StyledLink to={`/${id}`}>
                            <Nickname>{nickname}</Nickname>
                        </StyledLink>
                    </Sub>
                </Header>
                <Body>{body}</Body>
            </SubContainer>
        </Container>
    )
}
