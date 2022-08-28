import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedLayout } from "layouts"
import {
  CreatorPage,
  FlashcardPage,
  FlashcardsPage,
  LoginPage,
  SettingsPage,
} from "pages"

export const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="flashcards" element={<FlashcardsPage />} />
        <Route path="flashcards/:id" element={<FlashcardPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="creator" element={<CreatorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
