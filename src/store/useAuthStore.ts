import { User } from 'types';
import { createZustandStore } from './createZustandStore';
import { sendSignInLinkToEmail, signOut } from 'firebase/auth';
import { auth } from 'inits';

interface AuthState {
  user: User | null | undefined;
  setUser: (user: User | null | undefined) => void;
  logInEmail: (email: string) => Promise<boolean>;
  logOut: () => Promise<void>;
}

const logInEmail = async (email: string) => {
  try {
    await sendSignInLinkToEmail(auth, email, {
      url: window.location.href,
      handleCodeInApp: true,
    });

    return true;
  } catch (error) {
    alert(error.message);

    return false;
  }
};

const logOut = async () => {
  await signOut(auth);
};

export const useAuthStore = createZustandStore<AuthState>({
  name: 'user',
  data: (set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logInEmail,
    logOut,
  }),
});
