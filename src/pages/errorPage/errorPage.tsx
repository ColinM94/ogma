import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError() as Error

  return (
    <>
      <h1>Error</h1>
      <div>{error.message}</div>
    </>
  )
}
