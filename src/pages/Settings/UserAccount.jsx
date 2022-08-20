import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useParams } from 'react-router-dom'
import { useFetch } from 'hooks/useFetch'
import StyledLink from 'components/UI/Link/StyledLink';
import styled from 'styled-components'
import { Panel } from 'components/UI/Panel/Panel';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const Header = styled.div`
    display: flex;
    margin-top: 10px;
    padding: 5px;
    text-align: left;
`;

const ButtonBackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    font-size: 12px;
    width: 50px;
`

const Nickname = styled.div`
    font-size: 20px;
`

const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    margin-top: 30px;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50%;

    /* border: 2px solid red; */
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    gap:30px;

`
const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 30px;
    gap: 10px;

`;

const AccountOptionsContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 300px;
`

const RightContainer = styled.div`
    display: flex;
    width:50%;
    justify-content: center;
`

const Avatar = styled.div`
    margin-right: 10px;
    margin-bottom: 10px;    
    img {
        width: 200px;
        height: 200px;
    }
`;

const UploadAvatar = styled.div`

`;

export const UserAccount = () => {
    const { id } = useParams()
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div style={{ width: '98%' }}>
            <Header>
                <ButtonBackContainer>
                    <KeyboardBackspaceIcon />
                    <StyledLink to={`/${id}`}>Profile</StyledLink>
                </ButtonBackContainer>
                <Nickname>{id}</Nickname>
            </Header>

            <Panel title='Account Settings' />

            <MainContainer>
                <LeftContainer>
                    <FormContainer>
                        <TextField
                            id="outlined-helperText"
                            label="Login (nickname)"
                            defaultValue="Default Value"
                            helperText="Case sensitive"
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Email"
                            defaultValue="user email"
                        />
                    </FormContainer>

                    <LinkContainer>
                        <StyledLink to={`/${id}`}>Change email</StyledLink>
                        <StyledLink to={`/${id}`}>Reset password via email</StyledLink>
                    </LinkContainer>

                    <AccountOptionsContainer>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </AccountOptionsContainer>

                </LeftContainer>

                <RightContainer>
                    <Avatar>
                        <img></img>
                    </Avatar>

                    <UploadAvatar>
                        <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </UploadAvatar>

                </RightContainer>

            </MainContainer>
        </div>

    )
}
