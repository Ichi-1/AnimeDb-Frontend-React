import { useContext} from 'react';
import AuthContext from 'components/Auth/context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />
};

export default ProtectedRoutes