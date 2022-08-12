import Card from 'react-bootstrap/Card';
import Typography from '@mui/material/Typography';

export const ItemCard = ({ title, poster, kind }) => {
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
                src={poster}
            />
            <Card.Body style={{
                maxHeight:'50px',
                margin:0,
                padding:0,
                whiteSpace:'nowrap',
            }}>
                <Typography component="caption">
                <p style={{fontSize:'15px'}}>{title}<br/>{kind}</p>
                </Typography>
            </Card.Body>
        </Card>
    );
}
