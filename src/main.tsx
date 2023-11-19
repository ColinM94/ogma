import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { initIconsLibrary } from 'inits';
import { LoadingOverlay } from 'components';

import { router } from './routes';
import 'styles/global.scss';

initIconsLibrary();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} fallbackElement={<LoadingOverlay />} />
);
