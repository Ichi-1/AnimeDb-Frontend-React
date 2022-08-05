import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../components/Auth/context/AuthContext'
import classess from './HomePage.module.css'

export const HomePage = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className={classess.Home}  style={{ marginTop: "35px" }}>
            {user
                ? <h1>Hello, {user.nickname}</h1>
                : <h1>Hello Anonymous User</h1>

            }

            <p>
                <Link to='/account'>
                    Content only for auhtenticated users
                </Link>
            </p>
        </div>
    )
}

