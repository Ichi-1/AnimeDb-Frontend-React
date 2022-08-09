import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../components/Auth/context/AuthContext'
import classess from './HomePage.module.css'
import StyledLink from 'components/UI/Link/StyledLink'
import Typography from '@mui/material/Typography';

export const HomePage = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className={classess.Home}>
       
            {user 
                ? <Typography component="h1" variant="h4">Hello, {user.nickname}</Typography> 
                : <Typography component="h1" variant="h4">Hello, anonymous </Typography> 

            }
            

            
            <Typography variant="caption" display="block" gutterBottom>
                <StyledLink   to='/account'>
                    Content only for auhtenticated users
                </StyledLink>
            </Typography>
         
        </div>
    )
}

