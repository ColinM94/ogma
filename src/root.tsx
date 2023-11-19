import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { Providers } from 'hooks';
import { useAuthStore } from 'store';
import { auth } from 'inits';
import { getDocument } from 'services';
import { LoadingOverlay } from 'components';
import { User } from 'types';

export const Root = () => {
  const { user, setUser } = useAuthStore();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const user = await getDocument<User>({ collection: 'users', id: firebaseUser.uid });

        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (user === null) return <LoadingOverlay />;

  return (
    <React.StrictMode>
      <Providers>
        <Outlet />
      </Providers>
    </React.StrictMode>
  );
};
