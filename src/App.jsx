import './styles/App.css';
import { AppRouter } from './routes/AppRouter';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';



export const App = () => {
  return (
    <div className="App">
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    </div>
  );
}


