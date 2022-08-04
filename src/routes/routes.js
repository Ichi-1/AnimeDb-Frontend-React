import AuthSuccess from "./pages/AuthSuccess"
import LoginPage from "./pages/SignInPage";


export const forAuthenticatedUser = [
    {path: '/home',  element: AuthSuccess},
]

export const forAnonymousUsers = [
    {path:'/login', element: LoginPage }
]


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