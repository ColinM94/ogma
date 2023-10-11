import { ErrorPage } from "pages"
import { Route } from "react-router-dom"

const routes = (
  <Route path="/" component={<Root />} errorElement={<ErrorPage />}></Route>
)
