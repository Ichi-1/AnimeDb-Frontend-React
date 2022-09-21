import { useContext} from 'react';
import AuthContext from 'context/AuthContext';
import { Navigate, Outlet, } from 'react-router-dom'

export const UserOnlyRoutes = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" />;
    }
    return <Outlet />
};
