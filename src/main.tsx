import React from "react"
import ReactDOM from "react-dom/client"

import { initIconsLibrary } from "inits"
import { Navigation } from "./navigation"

import "styles/global.scss"
import { Providers } from "hooks"

initIconsLibrary()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <Navigation />
    </Providers>
  </React.StrictMode>
)
