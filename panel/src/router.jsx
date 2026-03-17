import { createBrowserRouter } from 'react-router-dom';
import App from '../src/App';
import { LoginPage } from '../src/features/auth/presentation/pages/LoginPage';
import { RegisterPage } from '../src/features/auth/presentation/pages/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/dashboard',
    element: <App />,
  },
]);