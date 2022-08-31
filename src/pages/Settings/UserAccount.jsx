import { useState, useEffect } from 'react'
import { useFetch } from 'hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Panel } from 'components/UI/Panel/Panel';
import { BeatLoader } from 'react-spinners'
import { GenericButton } from 'components/UI/Buttons/Submit/SubmitButton';
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
import TextareaAutosize from '@mui/material/TextareaAutosize';

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
    font-size: 35px;
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
    flex-direction: column;
    width:50%;
`;

const AvatarContainer = styled.div`
    margin-left: 20px;
    display:flex;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
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
        about: "",
        gender: "",
        birthdate: "",
    });
    const [errors, setErrors] = useState({
        avatar: "",
    });

    const handleImageChange = (e) => {
        const newData = { ...data };
        newData["avatar"] = e.target.files[0];
        setData(newData);
    };
    
    const handleGenderChange = (event) => {
        const newData = { ...data };
        setGender(event.target.value);
        newData['gender'] = event.target.value
        setData(newData);
    };


    const handleChange = ({ currentTarget: input }) => {
        const newData = { ...data };
        newData[input.name] = input.value;
        setData(newData);
    };


    const doSubmit = async (e) => {
        e.preventDefault();
        const response = await UserService.updateProfile(
            id, data, accessToken
        )
        if (response.status !== 200) alert(response.status)
        fetchAuthUser()
    };


    const [fetchAuthUser, isLoading, error] = useFetch(async () => {
        const response = await UserService.getAuthUser(id, accessToken)
        if (response.status !== 200) alert(response.status)
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
                                    label="Birthdate"
                                    type="date"
                                    name='birthdate'
                                    value={user.birthdate}
                                    sx={{ width: 220 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => handleChange(e)}
                                />

                                <FormControl fullWidth>
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select
                                        label="gender"
                                        id="gender"
                                        value={gender}
                                        placeholder={user.gender}
                                        onChange={(e) => handleGenderChange(e)}
                                    >
                                        <MenuItem value={'M'}>Male</MenuItem>
                                        <MenuItem value={'F'}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </AccountOptionsContainer>

                        </LeftContainer>

                        <RightContainer>
                            <AvatarContainer>
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

                            </AvatarContainer>

                            <AboutContainer>
                                <Panel title='About Me'/>
                                <TextareaAutosize
                                    placeholder={user.about}
                                    name='about' 
                                    onChange={(e) => handleChange(e)} minRows={5} 
                                />

                            </AboutContainer>
                            
                        </RightContainer>

                        <ButtonsContainer>
                            <div style={{ marginTop: '30px' }}>
                                <StyledLink to={`/${id}`}>Cancel</StyledLink>
                            </div>
                            <div>
                                <GenericButton
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
