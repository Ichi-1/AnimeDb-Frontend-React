import React from 'react'
import Header from '../Layout/Header/Header'
import HomePage from '../../pages/AuthSuccess'

import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <Header />

        <Outlet />

        {/* <Footer /> */}
    </div>
  )
}




