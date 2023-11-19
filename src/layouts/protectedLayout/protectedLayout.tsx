import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from 'store';

interface Props {}

export const ProtectedLayout = ({}: Props) => {
  const { user } = useAuthStore();

  if (!user) return <Navigate to="/signIn" />;

  return <Outlet />;
};
