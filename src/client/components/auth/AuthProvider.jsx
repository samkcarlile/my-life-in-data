import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import Login from './Login';
import SignUp from './Signup';

export default function AuthProvider({ children }) {
  const isLoggedIn = useStoreState((state) => state.user.isLoggedIn);
  const { authenticate, login, signup } = useStoreActions((actions) => ({
    authenticate: actions.user.authenticate,
    login: actions.user.login,
    signup: actions.user.signup,
  }));

  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  if (isLoggedIn) {
    return children;
  }

  return (
    <Container>
      {showSignUp ? (
        <SignUp onSubmit={signup} />
      ) : (
        <Login onSignUpClick={() => setShowSignUp(true)} onSubmit={login} />
      )}
    </Container>
  );
}
