import { useState, useEffect } from 'react'
import { useFetch } from 'hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Panel } from 'components/UI/Panel/Panel';
import { BeatLoader } from 'react-spinners'
import { SubmitButton } from 'components/Buttons/SubmitButton/SubmitButton';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import StyledLink from 'components/UI/Link/StyledLink';
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import UserService from 'api/UserSerivce';
import FormHandler from 'utils/FormHandler';

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
`;

const Nickname = styled.div`
    font-size: 25px;
`;

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

`;

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
`;

const RightContainer = styled.div`
    display: flex;
    width:50%;
    justify-content: center;
`;

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

const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 70px;
    width: 100%;
    gap:20px;
    justify-content: end;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const UserAccount = () => {
    const { id } = useParams();
    const [gender, setGender] = useState('');
    const [user, setUser] = useState([]);
    const accessToken = JSON.parse(localStorage.getItem('JWT'))['access']

    const [data, setData] = useState({
        avatar: "",
    });
    const [errors, setErrors] = useState({
        avatar: "",
    });

    const handleImageChange = (e) => {
        let newData = { ...data };
        newData["avatar"] = e.target.files[0];
        setData(newData);
    };

    const doSubmit = async (e) => {
        e.preventDefault();
        const response = await UserService.updateProfile(
            id, data, accessToken
        )
        if (response.status !== 200) {
            alert(response.status)
        }
    };


    const [fetchAuthUser, isLoading, error] = useFetch(async () => {
        const response = await UserService.getAuthUser(id, accessToken)
        if (response.status !== 200) {
            alert(response.status)
        }
        const data = await response.json()
        setUser(data)
    })

    useEffect(() => {
        fetchAuthUser()
    }, [])

    return (
        <div style={{ width: '98%' }}>
            {isLoading &&
                <LoadingWrapper>
                    <BeatLoader loading size={20} speedMultiplier={1} />
                </LoadingWrapper>
            }
            {!isLoading &&
                <>
                    <Header>
                        <ButtonBackContainer>
                            <KeyboardBackspaceIcon />
                            <StyledLink to={`/${id}`}>Profile</StyledLink>
                        </ButtonBackContainer>
                        <Nickname>{user.nickname}</Nickname>
                    </Header>

                    <Panel title='Account Settings' />

                    <MainContainer>
                        <LeftContainer>
                            <FormContainer>
                                <TextField
                                    disabled
                                    label="Login (nickname)"
                                    value={user.nickname}
                                    defaultValue="User Nickname"
                                    InputProps={{
                                        readOnly: false,
                                    }}
                                    helperText="Case sensitive"
                                />

                                <TextField
                                    disabled
                                    label="Email"
                                    defaultValue="User Email"
                                    value={user.email}
                                    helperText="Case sensitive"
                                />
                            </FormContainer>

                            <LinkContainer>
                                <StyledLink to={`/${id}/settings/account/set-nickname`}>Set new login (nickname)</StyledLink>
                                <StyledLink to={`/${id}/settings/account/set-password`}>Set new password</StyledLink>
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
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select
                                        labelId="gender"
                                        id="gender"
                                        value={gender}
                                        label="Gender"
                                    >
                                        <MenuItem value={'Male'}>Male</MenuItem>
                                        <MenuItem value={'Male'}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </AccountOptionsContainer>

                        </LeftContainer>

                        <RightContainer>
                            <Avatar>
                                <img src={user.avatar_url}></img>
                            </Avatar>

                            <UploadAvatar>
                                <Button variant="contained" component="label">
                                    Upload
                                    <input 
                                        hidden accept="image/*" 
                                        multiple type="file" 
                                        onChange={(e) => {handleImageChange(e)}}
                                    />
                                </Button>
                            </UploadAvatar>

                        </RightContainer>

                        <ButtonsContainer>
                            <div style={{ marginTop: '30px' }}>
                                <StyledLink to={`/${id}`}>Cancel</StyledLink>
                            </div>
                            <div>
                                <SubmitButton 
                                onClick={(e) => doSubmit(e)} 
                                verb='Submit'
                                />
                            </div>

                        </ButtonsContainer>
                    </MainContainer>
                </>

            }

        </div>

    )
}
