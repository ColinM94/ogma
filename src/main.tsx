import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ProtectedLayout } from "layouts"
import { initIconsLibrary } from "inits"
import {
  CreatorPage,
  FlashcardPage,
  FlashcardsPage,
  SettingsPage,
  LoginPage,
} from "pages"

import "styles/global.scss"

initIconsLibrary()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="flashcards" element={<FlashcardsPage />} />
          <Route path="flashcards/:id" element={<FlashcardPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="creator" element={<CreatorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
