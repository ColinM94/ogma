import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Settings } from "pages/settings/settings"
import { Creator } from "pages/creator/creator"
import { FlashCards } from "pages/flashCards/flashCards"
import { ProtectedLayout } from "layouts/protectedLayout/protectedLayout"

import "styles/global.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="flashcards" element={<FlashCards />} />
          <Route path="settings" element={<Settings />} />
          <Route path="creator" element={<Creator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
