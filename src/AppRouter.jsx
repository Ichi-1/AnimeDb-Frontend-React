import App from './App'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';


import NotFound404 from './pages/NotFound404';
import {forAuthenticatedUser, forAnonymousUsers} from './routes'
import AuthSuccess from './pages/AuthSuccess';
import LoginPage from './pages/LoginPage';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<AuthSuccess />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFound404 />} />
            </Route>
                
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AppRouter


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