import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import StyledLink from 'components/UI/Link/StyledLink';
import AuthContext from 'context/AuthContext';
import { Panel } from 'components/UI/Panel/Panel';
import { GenericForm } from 'components/Forms/GenericForm'
import { GenericFormField } from 'components/Forms/GenericFormField';
import { GenericButton } from 'components/UI/Buttons/Submit/SubmitButton';


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


const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 70px;
    width: 100%;
    gap:20px;
    justify-content: end;
`;

const doSubmit = async (e) => {
    e.preventDefault();
};

export const SetPassword = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    return (
        <div style={{ width: '98%' }}>
            <Header>
                <ButtonBackContainer>
                    <KeyboardBackspaceIcon />
                    <StyledLink to={`/${id}`}>Profile</StyledLink>
                </ButtonBackContainer>
                <Nickname>{user.nickname}</Nickname>

            </Header>
            <Panel title='Set new password' />
            <GenericForm>
                <GenericFormField label='New Password' type='password' />
                <GenericFormField label='Current password' type='password' />
            </GenericForm>

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
        </div>
    )
}

export const SetNickname = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    return (
        <div style={{ width: '98%' }}>
            <Header>
                <ButtonBackContainer>
                    <KeyboardBackspaceIcon />
                    <StyledLink to={`/${id}`}>Profile</StyledLink>
                </ButtonBackContainer>
                <Nickname>{user.nickname}</Nickname>

            </Header>
            <Panel title='Set new login' />
            <GenericForm>
                <GenericFormField label='New login' />
                <GenericFormField label='Current password' type='password' />
            </GenericForm>

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
        </div>
    )
}
