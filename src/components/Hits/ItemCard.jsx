import Card from 'react-bootstrap/Card';
import Typography from '@mui/material/Typography';
import StyledLink from 'components/UI/Link/StyledLink';
import styled from 'styled-components'


const Title = styled.div`
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;

    cursor: pointer;

    color: #176093;

    &:hover {
        color:rgb(248, 89, 21);
    }
`;

const CaptionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

const ShowType = styled.span`
    color: #585757;
    font-size: 14px;
`;

const Year = styled.span`
    color: #585757;
    font-size: 14px;
`;


export const ItemCard = ({ title, kind, poster_image, year}) => {

    return (
        <Card style={{
                width: '130px',
                marginTop: '15px', 
                marginBottom:'20px',
                marginRight: '55px',
                marginLeft: '25px',
                // padding:'25px',
                border: 'hidden',
                textAlign:'left'
            }}>
            <Card.Img
                style={{
                    borderRadius:'0',
                    objectFit: 'fill', 
                    width:'170px', 
                    height:'250px', 
                }}
                variant="top"
                src={poster_image}
            />
            <Card.Body style={{
                maxHeight:'50px',
                margin:0,
                padding:0,
                whiteSpace:'nowrap',
                width: '170px',
            }}>     
            
            
                    <Title>
                    {title.length < 'Fullmetal Alchemist'.length 
                        ? title 
                        : title.slice(0, 'Fullmetal Alchemist'.length) + '...' 
                    }
                    </Title>
                    
                    <CaptionContainer>
                        <ShowType>{kind}</ShowType>
                        <Year>{year}</Year>
                    </CaptionContainer>

            </Card.Body>
        </Card>
    

    
    );
}

