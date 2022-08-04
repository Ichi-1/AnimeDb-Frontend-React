import React from 'react'
import { Header } from '../Layout/Header/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <Header />

        {/*TODO main block should be styled */}
        <main>
            <Outlet />   
        </main>

        {/* <Footer /> */}
    </div>
  )
}




