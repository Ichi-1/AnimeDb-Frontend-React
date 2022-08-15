import React from 'react'
import { Header } from 'components/Layout/Header/Header'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

export const Layout = () => {
  return (
    <div >
        <Header />

        {/*TODO main block should be styled */}
        <body className={styles.bodyBackground}>
            <main className={styles.container}>
                <Outlet />   
            </main>
        </body>
        
    
        
        {/* <Footer /> */}
    </div>
  )
}




