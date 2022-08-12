import { Outlet } from "react-router-dom"

export const ProtectedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  )
}
