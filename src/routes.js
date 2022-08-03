import AuthSuccess from "./pages/AuthSuccess"
import LoginPage from "./pages/SignInPage";


export const forAuthenticatedUser = [
    {path: '/home',  element: AuthSuccess},
]

export const forAnonymousUsers = [
    {path:'/login', element: LoginPage }
]