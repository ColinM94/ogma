import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ProtectedLayout } from "layouts"
import { initIconsLibrary } from "inits"
import { Creator, Flashcard, Flashcards, Settings } from "pages"

import "styles/global.scss"

initIconsLibrary()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="flashcards/:id" element={<Flashcard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="creator" element={<Creator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
