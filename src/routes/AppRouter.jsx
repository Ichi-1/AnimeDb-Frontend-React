import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { GuestOnlyRoutes } from './GuestOnlyRoutes';
import { UserOnlyRoutes } from './UserOnlyRoutes';

import { NotFound404 } from 'pages/NotFound404';
import { HomePage } from 'pages/Home/HomePage';
import { AuthorizationPage } from 'pages/Auth/AuthorizationPage';
import { RegistrationPage } from 'pages/Auth/RegistrationPage';
import { PasswordResetPage } from 'pages/Auth/PasswordResetPage';
import { AnimeSearchPage } from 'pages/Search/SearchPage'
import { SingleContentPage } from 'pages/SingleContent/SingleContentPage'
import { UsersList } from 'pages/UsersList/UsersList';
import { UserAccount } from 'pages/Settings/UserAccount';
import { UserProfile } from 'pages/UserProfile/UserProfile';

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<NotFound404 />} />
                    <Route path="/anime" element={<AnimeSearchPage />} />
                    
                    <Route path="/anime/:id" element={<SingleContentPage />} />
                    <Route path="/users" element={<UsersList />} />
                    <Route path="/:id" element={<UserProfile />} />

                    <Route element={<UserOnlyRoutes />}>
                        <Route path="/:id/settings/account" element={<UserAccount />} />
                    </Route>


                    <Route element={<GuestOnlyRoutes />}>
                        <Route path="/login" element={<AuthorizationPage />} />
                        <Route path="/sign_up" element={<RegistrationPage />} />
                        <Route path="/users/password/reset" element={<PasswordResetPage />} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
