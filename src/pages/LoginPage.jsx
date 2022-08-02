import { Link } from 'react-router-dom'
import React from 'react'

const LoginPage = () => {
  return (
    <div>  
      <navbar>
        <Link to="/">Home</Link>
      </navbar>
      <form>
        <input type="text" name="username" placeholder="Enter Username"></input>
        <input type="text" name="password" placeholder="Enter Password"></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default LoginPage