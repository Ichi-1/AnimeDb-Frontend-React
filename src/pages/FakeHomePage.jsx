import React from 'react'
import StyledLink from '../components/UI/Link/StyledLink'
import { Link } from 'react-router-dom'

const FakeHomePage = () => {
  return (
    <div style={{marginTop:"35px"}}>
        <h1>
            Hello Anonymous User
        </h1>
        <p>
            <Link to='/content'>
                Content only for auhtenticated users
            </Link>
        </p>
    </div>
  )
}

export default FakeHomePage