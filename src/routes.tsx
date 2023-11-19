import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { ProtectedLayout } from 'layouts';
import {
  CreatorPage,
  ErrorPage,
  FlashcardPage,
  FlashcardsPage,
  HomePage,
  LoginPage,
  SettingsPage,
  StudyPage,
} from 'pages';
import { Root } from './root';

const routes = (
  <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
    <Route path="/signIn" element={<LoginPage />} />
    <Route path="/" element={<ProtectedLayout />}>
      <Route path="home" element={<HomePage />} />
      <Route path="study" element={<StudyPage />} />
      <Route path="flashcards" element={<FlashcardsPage />} />
      <Route path="flashcards/:id" element={<FlashcardPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="creator" element={<CreatorPage />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
