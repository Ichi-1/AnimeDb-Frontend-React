import { useContext} from 'react';
import AuthContext from 'components/Auth/context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoutes = () => {
    const { user } = useContext(AuthContext);

    if (user) {
        return <Navigate to="/account" replace />;
    }

    return <Outlet />
}

export default AuthRoutes