import AuthSuccess from "./pages/AuthSuccess"
import LoginPage from "./pages/LoginPage";


export const forAuthenticatedUser = [
    {path: '/home',  element: AuthSuccess},
]

export const forAnonymousUsers = [
    {path:'/login', element: LoginPage }
]