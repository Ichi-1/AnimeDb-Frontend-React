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

const SubLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:10px;
`;

const SubRight = styled.div`
    display: flex;
    gap:10px;
    width: 10px;
`;

const Nickname = styled.div`
    font-weight: bold;
    height: 25px;
`;

const DateTime = styled.div`
    margin-top: 5px;
    font-size: 16px;
    color:#434242;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
`;

const Body = styled.div`
    font-size: 14px;
`;

const fake = "Глава понравилась.“Hawkeye Mihawk”!! Also a former Warlord of the Sea and his swordsmanship surpasses that of the Emperor “Red Haired”!! As the Strongest Swordsman in the World, he’s wanted for..!! 3.5 billion and 90 million berries!!Михоук=ТОП1"


export const SingleComment = ({ avatar, nickname, last_online, id }) => {
    return (
        <Container>
            
            <Avatar>
                    <img src='https://moe.shikimori.one/system/users/x160/743787.png?1650454722' alt='user'></img>
            </Avatar>
        

            <SubContainer>

                <Header>
                    <SubLeft>
                        <StyledLink to={`/${id}`}>
                            <Nickname>HelloWorld</Nickname>
                        </StyledLink>
                        <DateTime>3 hours ago</DateTime>
                    </SubLeft>

                    <SubRight>
                        <CommentButtons />
                    </SubRight>
                </Header>

                <Body>{fake}</Body>

            </SubContainer>




        </Container>
    )
}
