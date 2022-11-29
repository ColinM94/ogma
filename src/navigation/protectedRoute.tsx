import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "hooks"

interface Props {}

export const ProtectedRoute = ({}: Props) => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" />

  return <Outlet />
}
