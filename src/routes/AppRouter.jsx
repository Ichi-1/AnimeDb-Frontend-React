import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';

import NotFound404 from '../pages/NotFound404';
import { HomePage } from '../pages/HomePage';
import AccountPage from '../pages/AccountPage.jsx'

import AuthorizationPage from '../pages/AuthorizationPage';
import RegistrationPage from '../pages/RegistrationPage';
import PasswordResetPage from '../pages/PasswordResetPage';

import ProtectedRoutes from './ProtectedRoutes';
import AuthRoutes from './AuthRoutes';




export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage />} />
                <Route path="*" element={<NotFound404 />} />

                <Route element={<ProtectedRoutes />}>
                    <Route path="/account" element={<AccountPage />}/>
                </Route>
          
               
                <Route element={<AuthRoutes />}>
                    <Route path="/login" element={<AuthorizationPage />} />
                    <Route path="/sign_up" element={<RegistrationPage />} />
                    <Route path="/users/password/reset" element={<PasswordResetPage/>} />
                </Route>
                
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
