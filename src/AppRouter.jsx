import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

import NotFound404 from './pages/NotFound404';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import PasswordResetPage from './pages/PasswordResetPage'

import FakeHomePage from './pages/FakeHomePage';
import FakeContentPage from './pages/FakeContentPage.jsx'

import PrivateRoute from './utils/PrivateRoute';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>

                <Route index element={<FakeHomePage />} />
                <Route path="/content" element={<FakeContentPage />} />

                <Route path="/sign_in" element={<SignInPage />} />
                <Route path="/sign_up" element={<SignUpPage />} />
                <Route path="/users/password/reset" element={<PasswordResetPage/>} />
                <Route path="*" element={<NotFound404 />} />
            </Route>
                
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AppRouter




//* Эти функции в будущем можно использовать 
//* при при увеличении количества роутов
//* для разграничения доступа  анонимных и авторизованных юзеров

// import {forAuthenticatedUser, forAnonymousUsers} from './routes'

// {forAuthenticatedUser.map(route => 
//     <Route 
//         path={route.path} 
//         element={<route.element />} 
//     /> 
// )}

// {forAnonymousUsers.map(route => 
//     <Route 
//         path={route.path} 
//         element={<route.element />} 
//     /> 
// )}