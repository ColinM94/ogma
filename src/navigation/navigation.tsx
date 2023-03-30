import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  CreatorPage,
  FlashcardPage,
  FlashcardsPage,
  HomePage,
  LoginPage,
  SettingsPage,
} from "pages"
import { ProtectedRoute } from "./protectedRoute"
import { StudyPage } from "pages/studyPage/studyPage"

export const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="home" element={<HomePage />} />
        <Route path="study" element={<StudyPage />} />
        <Route path="flashcards" element={<FlashcardsPage />} />
        <Route path="flashcards/:id" element={<FlashcardPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="creator" element={<CreatorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
