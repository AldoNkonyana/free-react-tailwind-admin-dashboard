import { useNavigate, Outlet, Route } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Replace with your authentication context
import ECommerce from './pages/Dashboard/ECommerce';
function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <Route element={<Outlet />}>
      <ECommerce />
    </Route>
  );
}

export default ProtectedRoute;
