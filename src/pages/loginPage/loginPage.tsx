import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, InputText } from 'components';
import { signIn, signUp } from 'services';
import { useAuthStore } from 'store';

import styles from './styles.module.scss';

export const LoginPage = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [showSignInForm, setShowSignInForm] = React.useState(false);

  const handleSignIn = () => {
    signIn(email, password);
  };

  const handleSignUp = () => {
    signUp(email, password);
  };

  const handleToggle = () => {
    setShowSignInForm((prev) => !prev);
  };

  React.useEffect(() => {
    console.log(user);
    if (user) navigate('/home');
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Welcome Back!</div>

      <div className={styles.content}>
        <InputText
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Email"
          className={styles.inputContainer}
          inputClassName={styles.input}
        />

        <InputText
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Password"
          className={styles.inputContainer}
          inputClassName={styles.input}
        />

        {!showSignInForm && (
          <InputText
            value={password2}
            setValue={setPassword2}
            type="password"
            placeholder="Re-Type Password"
            className={styles.inputContainer}
            inputClassName={styles.input}
          />
        )}

        <Button
          label={showSignInForm ? 'Sign In' : 'Sign Up'}
          className={styles.signInBtn}
          onClick={showSignInForm ? handleSignIn : handleSignUp}
        />

        {showSignInForm && (
          <div className={styles.toggleText} onClick={handleToggle}>
            <span>Don't have an account?</span>
            <span className={styles.toggleTextHighlight}>&nbsp;Sign Up</span>
          </div>
        )}

        {!showSignInForm && (
          <div className={styles.toggleText} onClick={handleToggle}>
            <span>Have an account?</span>
            <span className={styles.toggleTextHighlight}>&nbsp;Sign In</span>
          </div>
        )}
      </div>
    </div>
  );
};
