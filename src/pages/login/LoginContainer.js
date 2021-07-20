import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../common/LoginButton/LoginButton';

const LoginContainer = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button type="button" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Sign Up</button>
      <LoginButton />
    </div>
  );
};

export default LoginContainer;
