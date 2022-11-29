import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  ComponentsPage,
  CreatorPage,
  FlashcardPage,
  FlashcardsPage,
  LoginPage,
  SettingsPage,
} from "pages"
import { ProtectedRoute } from "./protectedRoute"

export const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/components" element={<ComponentsPage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="flashcards" element={<FlashcardsPage />} />
        <Route path="flashcards/:id" element={<FlashcardPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="creator" element={<CreatorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
